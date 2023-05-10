// Бинарное дерево поиска (BST) - это бинарное дерево, в котором для каждого узла выполняется условие:
// все значения в левом поддереве меньше значения узла, а все значения в правом поддереве больше значения узла.
//
// Сложность операций вставки и поиска элемента в бинарном дереве поиска в худшем случае составляет O(n),
// где n - количество узлов в дереве. Это происходит, когда дерево вырождается в своеобразный
// связный список (когда у каждого узла есть только один дочерний узел).
// В сбалансированном дереве сложность операций составляет O(log n).
export class BSTNode<T> {
  value: T
  left: BSTNode<T> | null
  right: BSTNode<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinarySearchTree<T> {
  root: BSTNode<T> | null

  constructor() {
    this.root = null
  }

  insert(value: T): void {
    if (this.root === null) {
      this.root = new BSTNode<T>(value)

      return
    }

    let currentNode = this.root
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BSTNode<T>(value)

          return
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BSTNode<T>(value)

          return
        }
        currentNode = currentNode.right
      }
    }
  }

  contains(value: T): boolean {
    let currentNode = this.root

    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }
}
