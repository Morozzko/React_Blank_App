// Двусвязный список - это структура данных, состоящая из узлов,
// каждый из которых содержит ссылки на предыдущий и следующий узлы.
// Это обеспечивает двунаправленное перемещение по списку. В отличие от односвязного списка,
// где ссылка существует только на следующий узел, в двусвязном списке можно легко перемещаться в обоих направлениях.

export class DoublyListNode<T> {
	constructor(
		public value: T,
		public prevNode: DoublyListNode<T> | null = null,
		public nextNode: DoublyListNode<T> | null = null
	) {}
}

export class DoublyLinkedList<T> {
	private head: DoublyListNode<T> | null = null
	private tail: DoublyListNode<T> | null = null

	addFirst(value: T): void {
		const newNode = new DoublyListNode(value, null, this.head)

		if (this.head !== null) {
			this.head.prevNode = newNode
		} else {
			this.tail = newNode
		}

		this.head = newNode
	}

	removeFirst(): T | null {
		if (this.head === null) {
			return null
		}

		const removedValue = this.head.value
		this.head = this.head.nextNode

		if (this.head !== null) {
			this.head.prevNode = null
		} else {
			this.tail = null
		}

		return removedValue
	}

	addLast(value: T): void {
		const newNode = new DoublyListNode(value, this.tail, null)

		if (this.tail !== null) {
			this.tail.nextNode = newNode
		} else {
			this.head = newNode
		}

		this.tail = newNode
	}

	removeLast(): T | null {
		if (this.tail === null) {
			return null
		}

		const removedValue = this.tail.value
		this.tail = this.tail.prevNode

		if (this.tail !== null) {
			this.tail.nextNode = null
		} else {
			this.head = null
		}

		return removedValue
	}

	find(value: T): DoublyListNode<T> | null {
		let currentNode = this.head

		while (currentNode !== null) {
			if (currentNode.value === value) {
				return currentNode
			}

			currentNode = currentNode.nextNode
		}

		return null
	}
}
