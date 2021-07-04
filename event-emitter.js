// basic event set-up. You must require the events module, create an emitter, and then you can run the emit and on functions.
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// can have as many emitter functions as you want, and the order of these .on functions matter
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`)
})
customEmitter.on('response', () => {
    console.log(`some other logic here`)
})


customEmitter.emit('response', 'Zack', 01)