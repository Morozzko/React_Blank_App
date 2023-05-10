// Дек: LIFO и FIFO, двусторонний доступ (добавление и удаление элементов с обоих концов).
//
// Двусторонняя очередь (Deque - Double-Ended Queue) - это структура данных,
// которая сочетает в себе особенности стека и очереди.
// В деке элементы могут быть добавлены или удалены с обоих концов.
// Это позволяет использовать дек как стек (с принципом LIFO) и очередь (с принципом FIFO)
// в зависимости от потребностей. Основные операции дека - это addFront, addBack, removeFront и removeBack,
// добавляющие или удаляющие элементы с соответствующих концов дека.
export class Deque<T> {
  private items: T[] = []

  addFront(element: T): void {
    this.items.unshift(element)
  }

  addBack(element: T): void {
    this.items.push(element)
  }

  removeFront(): T | undefined {
    return this.items.shift()
  }

  removeBack(): T | undefined {
    return this.items.pop()
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }
}
