// В B+ дереве поиск начинается с корневого узла и идет вниз по дереву,
// сравнивая значения ключей в каждом узле. Когда мы доходим до листа, в нем ищется нужное значение.
//
// Каждый узел имеет список ключей и ссылку на родительский узел.
// Узлы, не являющиеся листьями, также имеют список дочерних узлов.
class BPlusTreeNode {
  keys: number[] = []
  parent: BPlusTreeNode | null = null
  children: BPlusTreeNode[] = []
  insertKey(key: number, index: number) {
    this.keys.splice(index, 0, key)
  }
  findLeaf(key: number): BPlusTreeLeaf {
    const childIndex = this.findKey(key)
    if (
      this.children[childIndex].keys.includes(key) ||
      this.children[childIndex + 1] == undefined
    ) {
      if (this.children[childIndex] instanceof BPlusTreeLeaf) {
        return this.children[childIndex] as BPlusTreeLeaf
      } else {
        return this.children[childIndex].findLeaf(key)
      }
    } else {
      if (this.children[childIndex + 1] instanceof BPlusTreeLeaf) {
        return this.children[childIndex + 1] as BPlusTreeLeaf
      } else {
        return this.children[childIndex + 1].findLeaf(key)
      }
    }
  }
  findKey(key: number): number {
    let low = 0
    let high = this.keys.length - 1
    let mid

    while (low <= high) {
      mid = Math.floor((low + high) / 2)

      if (this.keys[mid] === key) return mid
      else if (this.keys[mid] < key) low = mid + 1
      else high = mid - 1
    }

    return low
  }
  removeKey(index: number) {
    this.keys.splice(index, 1)
  }
  split(index: number): [number, BPlusTreeNode] {
    const newNode = new BPlusTreeNode()
    newNode.keys = this.keys.splice(index)
    newNode.children = this.children.splice(index)

    for (const child of newNode.children) {
      child.parent = newNode
    }

    return [this.keys[this.keys.length - 1], newNode]
  }
}

// BPlusTreeLeaf расширяет BPlusTreeNode и добавляет ссылку на следующий лист (next),
// а также хранит значения, связанные с ключами.
class BPlusTreeLeaf extends BPlusTreeNode {
  next: BPlusTreeLeaf | null = null
  values: any[] = []

  insertValue(key: number, value: any) {
    const index = this.findKey(key)
    super.insertKey(key, index)
    this.values.splice(index, 0, value)
  }
  split(index: number): [number, BPlusTreeLeaf] {
    const newLeaf = new BPlusTreeLeaf()
    newLeaf.keys = this.keys.splice(index)
    newLeaf.values = this.values.splice(index)
    newLeaf.next = this.next
    this.next = newLeaf

    return [newLeaf.keys[0], newLeaf]
  }
  findLeaf(key: number): BPlusTreeLeaf {
    return this
  }
  removeValue(key: number) {
    const index = this.findKey(key)
    if (index < this.keys.length && this.keys[index] === key) {
      super.removeKey(index)
      this.values.splice(index, 1)
    }
  }
  merge(sibling: BPlusTreeLeaf, parentKeyIndex: number) {
    const parent = this.parent

    // Удаляем ключ из родителя, который разделяет этот узел и его брат
    parent!.removeKey(parentKeyIndex)
    parent!.children.splice(parentKeyIndex + 1, 1)

    // Добавляем ключ родителя в узел
    this.keys.push(parent!.keys[parentKeyIndex])

    // Добавляем все ключи брата в узел
    this.keys = this.keys.concat(sibling.keys)

    // Обновляем ссылки на следующий узел
    this.next = sibling.next
  }
  findValue(key: number): any {
    const index = this.findKey(key)

    return index < this.keys.length && this.keys[index] === key
      ? this.values[index]
      : undefined
  }
  rangeSearch(low: number, high: number): any[] {
    const values = []
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] >= low && this.keys[i] <= high) {
        values.push(this.values[i])
      }
    }
    if (this.next) {
      values.push(...this.next.rangeSearch(low, high))
    }

    return values
  }
}

// BPlusTree представляет само дерево. Оно содержит ссылку на корневой узел и порядок дерева - максимальное количество
// дочерних элементов, которое может иметь узел.
export class BPlusTree {
  root: BPlusTreeNode
  order: number

  constructor(order = 3) {
    this.root = new BPlusTreeLeaf()
    this.order = order
  }

  search(key: number): any {
    let node: BPlusTreeNode = this.root

    while (!(node instanceof BPlusTreeLeaf)) {
      node = node.children[node.findKey(key)]
    }

    return (node as BPlusTreeLeaf).findValue(key)
  }

  split(node: BPlusTreeNode) {
    const index = Math.ceil((this.order + 1) / 2)
    const [key, newNode] = node.split(index)

    if (node.parent) {
      const parentIndex = node.parent.findKey(key)
      node.parent.insertKey(key, parentIndex)
      node.parent.children.splice(parentIndex + 1, 0, newNode)
      newNode.parent = node.parent

      if (node.parent.keys.length > this.order) {
        this.split(node.parent)
      }
    } else {
      this.root = new BPlusTreeNode()
      this.root.keys = [key]
      this.root.children = [node, newNode]
      node.parent = this.root
      newNode.parent = this.root
    }
  }

  remove(key: number) {
    let node: BPlusTreeNode = this.root

    // Находим лист, откуда нужно удалить значение
    while (!(node instanceof BPlusTreeLeaf)) {
      node = node.children[node.findKey(key)]
    }

    // Удаляем значение
    const leaf = node as BPlusTreeLeaf
    leaf.removeValue(key)

    // Если лист стал пустым и он не корневой, проводим слияние
    if (leaf.keys.length === 0 && leaf !== this.root) {
      this.merge(leaf)
    }
  }
  merge(node: BPlusTreeLeaf) {
    const parent = node.parent
    const nodeIndex = parent!.findKey(node.keys[0])
    const siblingIndex =
      nodeIndex < parent!.keys.length - 1 ? nodeIndex + 1 : nodeIndex - 1
    const sibling = parent!.children[siblingIndex] as BPlusTreeLeaf

    if (node.keys.length + sibling.keys.length <= this.order) {
      // Если узлы можно слить в один, делаем это
      if (nodeIndex < siblingIndex) {
        node.merge(sibling, nodeIndex)
      } else {
        sibling.merge(node, siblingIndex)
      }

      // Если родительский узел стал пустым и он не корневой, проводим слияние
      if (parent!.keys.length === 0) {
        if (parent === this.root) {
          // Если родитель является корнем, делаем новый корень
          this.root = nodeIndex < siblingIndex ? node : sibling
          this.root.parent = null
        } else {
          this.merge(parent as BPlusTreeLeaf)
        }
      }
    } else {
      // Если узлы не могут быть слиты, переносим ключ из брата
      if (nodeIndex < siblingIndex) {
        node.keys.push(parent!.keys[nodeIndex])
        node.values.push(sibling.values.shift())
        parent!.keys[nodeIndex] = sibling.keys[0]
      } else {
        node.keys.unshift(parent!.keys[siblingIndex])
        node.values.unshift(sibling.values.pop())
        parent!.keys[siblingIndex] = node.keys[0]
      }
    }
  }
  insert(key: number, value: any) {
    let node: BPlusTreeNode = this.root

    // Находим лист, куда нужно вставить значение
    while (!(node instanceof BPlusTreeLeaf)) {
      node = node.children[node.findKey(key)]
    }

    // Вставляем значение
    const leaf = node as BPlusTreeLeaf
    leaf.insertValue(key, value)

    // Если лист переполнен, разделяем его
    if (leaf.keys.length > this.order) {
      this.split(leaf)
    }
  }
  rangeSearch(low: number, high: number): any[] {
    const leaf = this.root.findLeaf(low)

    return leaf.rangeSearch(low, high)
  }
}
