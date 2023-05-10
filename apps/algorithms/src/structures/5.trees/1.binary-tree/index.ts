// Простое бинарное дерево имеет узлы, каждый из которых содержит значение и два дочерних узла (левый и правый).
//
// Сложность алгоритма для обоих методов в худшем случае составляет O(n), где n - количество узлов в дереве.
// Это происходит, когда дерево вырождается в своеобразный
// связный список (когда у каждого узла есть только один дочерний узел).
// В сбалансированном дереве сложность алгоритма составляет O(log n).
export class TreeNode<T> {
  value: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class BinaryTree<T> {
  root: TreeNode<T> | null

  constructor() {
    this.root = null
  }

  insert(value: T): void {
    if (this.root === null) {
      this.root = new TreeNode<T>(value)

      return
    }

    let currentNode = this.root
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new TreeNode<T>(value)

          return
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = new TreeNode<T>(value)

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
