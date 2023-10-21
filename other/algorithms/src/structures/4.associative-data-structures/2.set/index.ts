// Множества: Множества предназначены для хранения уникальных значений. Они не содержат пар ключ-значение,
// а только значения. Множества поддерживают быстрое добавление, удаление и проверку на наличие элемента.

const mySet = new Set<number>()

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(1) // Дубликаты не добавляются

// console.log(mySet.size) // 3
// console.log(mySet.has(1)) // true
// console.log(mySet.has(4)) // false

export class MySet<T> {
  private items: { [key: string]: T } = {}

  private toKey(value: T): string {
    return JSON.stringify(value)
  }

  add(value: T): void {
    const key = this.toKey(value)
    this.items[key] = value
  }

  has(value: T): boolean {
    const key = this.toKey(value)

    return this.items.hasOwnProperty(key)
  }

  delete(value: T): boolean {
    const key = this.toKey(value)
    if (this.items.hasOwnProperty(key)) {
      delete this.items[key]

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
