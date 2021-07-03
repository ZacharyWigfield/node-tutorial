// EVERY FILE IN NODE IS A MODULE
// Module = encapsulated code
// when you import a module you also invoke it. so if a function is called in the module it will execute when imported.

const names = require('./names')
const sayHi = require('./utils')
const data = require('./altsyntax')


// const john = 'John'
// const peter = 'Peter'
// const secret = 'SUPER SECRET'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)