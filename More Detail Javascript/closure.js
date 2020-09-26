//Замыкания

// function createCalsFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalsFunction(42) // return Functions
// calc() // In calc closured(saved) given n (42) in our case



// Example to use Closure
// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(1)

// console.log(addOne(10))
// console.log(addOne(41))

// console.log(addTen(10))
// console.log(addTen(41))



// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('netflix'))

// console.log(ruUrl('yandex'))
// console.log(ruUrl('vkontakte'))

// console.log(comUrl('vkontakte'))



// Task

//Написать свою функцию bind()
//Пример работы: 

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Muxaul',
    age: 22,
    job: 'Frontend'
}

const person2 = {
    name: 'Elena',
    age: 19,
    job: 'SMM'
}

function bind(context, fn) {
    //  My solve not right
    // context.logPerson = logPerson;

    return function (...args) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)()
bind(person2, logPerson)()