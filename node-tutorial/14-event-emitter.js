const EventEmitter = require('events');
const customEmitter = new EventEmitter();
// on: listen for event
// emit: emit an event

// things execute in order they are written

customEmitter.on('response', (name,id) => {
    console.log(`data received ${name} with id:${id}`);
})
// can have mutlple things listening to same event
customEmitter.on('response', () => {
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'john', 34)

