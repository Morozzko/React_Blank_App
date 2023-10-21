// Словари (хеш-таблицы): Обычные объекты в JavaScript, которые могут быть использованы как хеш-таблицы.
// Они позволяют хранить пары ключ-значение,
// где ключ является строкой.
// Они имеют ограниченные возможности по сравнению с классами Map и Set.

const dictionary: Record<string, number> = {}

dictionary['one'] = 1
dictionary['two'] = 2
dictionary['three'] = 3

console.log(dictionary['one']) // 1
console.log(dictionary['two']) // 2
console.log(dictionary['three']) // 3
