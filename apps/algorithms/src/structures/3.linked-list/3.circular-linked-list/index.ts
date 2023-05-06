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
		public nextNode: CircularListNode<T> | null = null
	) {}
}

export class CircularLinkedList<T> {
	private tail: CircularListNode<T> | null = null

	add(value: T): void {
		const newNode = new CircularListNode(value)

		if (this.tail === null) {
			this.tail = newNode
			newNode.nextNode = newNode
		} else {
			newNode.nextNode = this.tail.nextNode
			this.tail.nextNode = newNode
			this.tail = newNode
		}
	}

	remove(): T | null {
		if (this.tail === null) {
			return null
		}

		const removedValue = this.tail.nextNode?.value

		if (this.tail.nextNode === this.tail) {
			this.tail = null
		} else {
			this.tail.nextNode = this.tail.nextNode!.nextNode
		}

		return removedValue as T | null
	}

	find(value: T): CircularListNode<T> | null {
		if (this.tail === null) {
			return null
		}

		let currentNode = this.tail.nextNode

		do {
			if (currentNode?.value === value) {
				return currentNode
			}

			currentNode = currentNode!.nextNode
		} while (currentNode !== this.tail.nextNode)

		return null
	}
}
