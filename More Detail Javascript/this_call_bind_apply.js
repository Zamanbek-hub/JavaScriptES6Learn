function hello() {
    console.log('Hello', this)
}

// Chrome window object
window.hello()

const person = {
    name: 'Zamanbek',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window), // binding Object
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}



const lena = {
    name: 'Elena',
    age: 23,
}

const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23') //return function
person.logInfo.bind(lena, 'Frontend', '8-999-123-12-23')()


// Call 
/* 
Difference between bind() and call()
both binding Object
bind return function: bind(lena)()
call' call' this function: call(lena)
*/
person.logInfo.call(lena, 'Frontend', '8-999-123-12-23')


// Apply
// We give only 2 parameters
person.logInfo.apply(lena, ['Frontend', '8-999-123-12-23'])



const array = [1, 2, 3, 4, 5]

// Its oldschool and uncomfortable method in 'several cases'
// function multBy(arr, n) {
// return arr.map(function (i) {
//     return i * n
// })
// }

// console.log(multBy(array, 15))


// Bind method to Array
// And we can call in console [new values].multBy(num) 
Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}


console.log(array.multBy(2))