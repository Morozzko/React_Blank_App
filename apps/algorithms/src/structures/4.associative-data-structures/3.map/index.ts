// Карты (ассоциативные массивы): Карты, представленные классом Map, позволяют хранить пары ключ-значение,
// где ключ может быть любого типа. У карт есть методы для управления размером, добавления, удаления
// и изменения элементов. Карты предоставляют гораздо больше возможностей по сравнению со словарями (объектами)
// и имеют лучшую производительность при работе с большим количеством элементов.

const myMap = new Map<string, number>()

myMap.set('one', 1)
myMap.set('two', 2)
myMap.set('three', 3)

// console.log(myMap.get('one')) // 1
// console.log(myMap.get('two')) // 2
// console.log(myMap.get('three')) // 3

export class MyMap<K, V> {
	private items: { [key: string]: [K, V] } = {}

	private toKey(key: K): string {
		return JSON.stringify(key)
	}

	set(key: K, value: V): void {
		const keyStr = this.toKey(key)
		this.items[keyStr] = [key, value]
	}

	get(key: K): V | undefined {
		const keyStr = this.toKey(key)
		const item = this.items[keyStr]

		return item ? item[1] : undefined
	}

	has(key: K): boolean {
		const keyStr = this.toKey(key)

		return this.items.hasOwnProperty(keyStr)
	}

	delete(key: K): boolean {
		const keyStr = this.toKey(key)
		if (this.items.hasOwnProperty(keyStr)) {
			delete this.items[keyStr]

			return true
		}

		return false
	}

	size(): number {
		return Object.keys(this.items).length
	}

	clear(): void {
		this.items = {}
	}
}
