// Prototype: В JavaScript, каждая функция имеет свойство prototype.
// Это свойство является объектом, на который указывают все экземпляры созданного функцией-конструктором объекта.
// Когда мы добавляем методы и свойства в prototype, они становятся доступными для всех
// экземпляров данного типа объекта. Это основной механизм для реализации наследования и повторного
// использования кода в JavaScript.
//
// Proto: Это свойство объекта указывает на прототип объекта, от которого он был унаследован.
// __proto__ указывает на объект, который JavaScript будет искать, когда попытается получить доступ к свойству,
// которое не существует в текущем объекте. Это формирует так называемую цепочку прототипов (prototype chain),
// которая просматривается, пока не будет найдено свойство или достигнут конец цепочки.
//
// __proto__ считается устаревшим и не рекомендуется к использованию в современном коде.
// Вместо этого, для манипуляций с прототипами объектов рекомендуется использовать
// функции Object.getPrototypeOf и Object.setPrototypeOf.

const number = 1
const string = '1'
const obj = {}
function a() {
  console.log('a')
}

console.log('number.__proto__: ', number.__proto__) // {}
console.log('string.__proto__: ', string.__proto__) // {}
console.log('function.__proto__: ', a.__proto__) // {}
console.log('obj.__proto__: ', obj.__proto__) //  [Object: null prototype] {}
console.log('obj.__proto__.__proto__: ', obj.__proto__.__proto__) // null
// console.log(null.__proto__) // Cannot read properties of null (reading '__proto__')
console.log(Object.getPrototypeOf(number)) // {}
