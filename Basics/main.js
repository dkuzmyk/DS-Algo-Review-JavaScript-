// console.log(module);

// var logger = require('./logger.js')

// console.log(logger)

// logger.log('Message')


const greet = (name) => {
    console.log('Hello' ,name);
}


// GLOBAL

setTimeout(() => {
    console.log('Delayed timeout!');
    clearInterval(interval);
}, 3000);

var s = 0

var interval = setInterval(() => {
    console.log('Interval msg');
    s += 1
    console.log('N',s);
}, 1000);

// REQUIRE

const x = require('./people');

console.log(x.people);
console.log(x.people[0]);
console.log(x.age);

const os = require('os');
console.log(os.platform(), os.homedir())

