// Циклический связный список (circular linked list) - это структура данных, которая похожа на обычный связный список,
// но последний узел списка ссылается на первый узел, а не на null. Это означает, что список образует замкнутый цикл,
// и можно обойти весь список, начиная с любого узла.
//
// Преимущество циклических связных списков заключается в том, что они могут быть использованы в алгоритмах,
// где необходимо обрабатывать набор элементов в циклическом порядке, например,
// в алгоритмах кэширования или в алгоритмах обработки сигналов.
export class CircularListNode<T> {
  constructor(
    public value: T,
    public nextValue: CircularListNode<T> | null = null
  ) {}
}

export class CircularLinkedList<T> {
  private head: CircularListNode<T> | null = null

  // Добавление элемента в начало списка
  addFirst(value: T): void {
    const newNode = new CircularListNode<T>(value)

    if (this.head === null) {
      this.head = newNode
      newNode.nextValue = newNode
    } else {
      let currentNode = this.head
      while (currentNode.nextValue !== this.head) {
        currentNode = currentNode.nextValue!
      }

      newNode.nextValue = this.head
      currentNode.nextValue = newNode
      this.head = newNode
    }
  }

  // Добавление элемента в конец списка
  addLast(value: T): void {
    const newNode = new CircularListNode<T>(value)

    if (this.head === null) {
      this.head = newNode
      newNode.nextValue = newNode
    } else {
      let currentNode = this.head
      while (currentNode.nextValue !== this.head) {
        currentNode = currentNode.nextValue!
      }

      currentNode.nextValue = newNode
      newNode.nextValue = this.head
    }
  }

  // Вывод элементов списка
  display(): T[] {
    const values: T[] = []

    if (this.head === null) {
      return values
    }

    let currentNode = this.head
    do {
      values.push(currentNode.value)
      currentNode = currentNode.nextValue!
    } while (currentNode !== this.head)

    return values
  }
  displayList(): CircularListNode<T>[] {
    const values: CircularListNode<T>[] = []

    if (this.head === null) {
      return values
    }

    let currentNode = this.head
    do {
      values.push(currentNode)
      currentNode = currentNode.nextValue!
    } while (currentNode !== this.head)

    return values
  }
}
