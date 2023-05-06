// Множества: Множества предназначены для хранения уникальных значений. Они не содержат пар ключ-значение,
// а только значения. Множества поддерживают быстрое добавление, удаление и проверку на наличие элемента.

const mySet = new Set<number>()

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(1) // Дубликаты не добавляются

console.log(mySet.size) // 3
console.log(mySet.has(1)) // true
console.log(mySet.has(4)) // false
