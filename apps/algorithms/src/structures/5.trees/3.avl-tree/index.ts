// AVL-дерево — это сбалансированное по высоте бинарное дерево поиска, где высота двух поддеревьев каждого узла
// отличается не более чем на одну единицу. AVL-деревья были разработаны Адельсон-Вельским и Ландисом
// и названы по их инициалам.
// Благодаря балансировке высоты, сложность основных операций вставки, удаления и поиска в AVL-деревьях
// составляет O(log n), где n — количество узлов в дереве.
// Это обеспечивает лучшую производительность по сравнению с обычными бинарными деревьями поиска.
export class AVLNode<T> {
	value: T
	left: AVLNode<T> | null
	right: AVLNode<T> | null
	height: number

	constructor(value: T) {
		this.value = value
		this.left = null
		this.right = null
		this.height = 1
	}
}

export class AVLTree<T> {
	root: AVLNode<T> | null

	constructor() {
		this.root = null
	}

	getHeight(node: AVLNode<T> | null): number {
		return node ? node.height : 0
	}

	updateHeight(node: AVLNode<T>): void {
		node.height =
			Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
	}

	balanceFactor(node: AVLNode<T>): number {
		return this.getHeight(node.left) - this.getHeight(node.right)
	}

	rotateLeft(node: AVLNode<T>): AVLNode<T> {
		const newRoot = node.right!
		node.right = newRoot.left
		newRoot.left = node

		this.updateHeight(node)
		this.updateHeight(newRoot)

		return newRoot
	}

	rotateRight(node: AVLNode<T>): AVLNode<T> {
		const newRoot = node.left!
		node.left = newRoot.right
		newRoot.right = node

		this.updateHeight(node)
		this.updateHeight(newRoot)

		return newRoot
	}

	balanceNode(node: AVLNode<T>): AVLNode<T> {
		this.updateHeight(node)

		if (this.balanceFactor(node) > 1) {
			if (this.balanceFactor(node.left!) < 0) {
				node.left = this.rotateLeft(node.left!)
			}

			return this.rotateRight(node)
		}

		if (this.balanceFactor(node) < -1) {
			if (this.balanceFactor(node.right!) > 0) {
				node.right = this.rotateRight(node.right!)
			}

			return this.rotateLeft(node)
		}

		return node
	}

	insert(value: T): void {
		this.root = this._insert(this.root, value)
	}

	private _insert(node: AVLNode<T> | null, value: T): AVLNode<T> {
		if (node === null) {
			return new AVLNode<T>(value)
		}

		if (value < node.value) {
			node.left = this._insert(node.left, value)
		} else if (value > node.value) {
			node.right = this._insert(node.right, value)
		} else {
			return node
		}

		return this.balanceNode(node)
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
