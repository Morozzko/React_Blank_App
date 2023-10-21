// Связный список (linked list) - это структура данных, в которой элементы хранятся в узлах,
// а каждый узел содержит ссылку на следующий узел в списке.
// Это позволяет эффективно вставлять и удалять элементы в произвольных позициях списка без необходимости
// перемещения других элементов.
//
// Узел (Node) - это основной элемент структуры данных,
// такой как связный список, дерево или граф.
// Узел обычно содержит некоторую информацию (значение) и ссылки на другие узлы, которые определяют связи между ними.
//
// В случае связного списка, узел содержит значение элемента списка и ссылку на следующий узел.
// В бинарных деревьях, например, узел содержит значение элемента и две ссылки на потомков: левого и правого.
//
// Узлы используются для представления иерархических или связных структур данных,
// где элементы имеют отношения друг с другом и должны быть связаны для облегчения навигации и обработки данных.

//   LinkedList {
//       head: ListNode {
//         value: 1,
//         nextValue: ListNode { value: 2, nextValue: [ListNode] }
//       }

// Определение узла связного списка
export class ListNode<T> {
  constructor(public value: T, public nextNode: ListNode<T> | null = null) {}
}

// Определение связного списка
export class LinkedList<T> {
  private head: ListNode<T> | null = null

  // Добавление элемента в начало списка
  addFirst(value: T): void {
    this.head = new ListNode<T>(value, this.head)
  }

  // Удаление элемента из начала списка
  removeFirst(): T | null {
    if (this.head === null) {
      return null
    }
    const removedValue = this.head.value
    this.head = this.head.nextNode

    return removedValue
  }

  // Добавление элемента в конец списка
  addLast(value: T): void {
    const newNode = new ListNode<T>(value)

    if (this.head === null) {
      this.head = newNode

      return
    }

    let currentNode = this.head
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }

    currentNode.nextNode = newNode
  }

  // Поиск элемента в списке
  find(value: T): ListNode<T> | null {
    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.nextNode
    }

    return null
  }

  // Удаление элемента по индексу
  removeAt(index: number): T | null {
    if (index < 0 || this.head === null) {
      return null
    }

    if (index === 0) {
      const removedValue = this.head.value
      this.head = this.head.nextNode

      return removedValue
    }

    let currentIndex = 1
    let currentNode = this.head

    while (currentNode.nextNode !== null) {
      if (currentIndex === index) {
        const removedValue = currentNode.nextNode.value
        currentNode.nextNode = currentNode.nextNode.nextNode

        return removedValue
      }

      currentNode = currentNode.nextNode
      currentIndex++
    }

    return null
  }
}
// В связанном списке можно удалить последний элемент.
// Однако это действие может быть менее эффективным, чем удаление элемента из начала списка.
//
// При удалении последнего элемента в односвязном списке, вам нужно перебрать весь список,
// чтобы найти предпоследний элемент, изменить его ссылку на следующий элемент с последнего на null.
// Это займет O(n) времени, где n - количество элементов в списке.
//
// В случае двусвязного списка удаление последнего элемента может быть выполнено быстрее,
// поскольку у вас есть ссылка на предыдущий элемент для каждого узла.
// Вам нужно будет только изменить ссылку на следующий элемент предпоследнего узла на null и удалить последний узел.
// Это займет O(1) времени, если у вас есть доступ к последнему элементу (например, через хвостовой указатель).
