console.log('hello world');
console.log('12345');
console.log('67890');
global.bubble = "Bubbles";
console.log(global.bubble);

const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('fun', () => {
    console.log("I am happy :)");
})

eventEmitter.on('sad', () => {
    console.log("I am sad.");
})

event