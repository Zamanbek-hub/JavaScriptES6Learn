const citiesRussia = ['Moscow', 'SanktPeterburg', 'Kazan', 'Novosibirsk']
const citiesEurope = ['Berlin', 'Praha', 'Paris']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SanktPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}
const citiesEuropeWithPopulation = {
    Moscow: 36,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}


/* 
Spread разварачывает обьекты и массив 
Rest собирает их
Примеры снизу
*/


// **********Spread**********
/* 
Available in ES6
Spread по сути берет массив и разварачивает его 
*/
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// new Method
// const allCities = [...citiesEurope, 'Washington', ...citiesRussia] // Clone

// Old Method
// const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities)


/* 
Spread work with objects
*/

/* 
В случае с обьектами spread не знает куда деть ключи и значение
Так что мы должны складывать их в фигурные скобки и получить новый обьект


В примере снизу как мы видим может быть конфлики ключей "Moscow"  
Будет применен посленее значение
*/
// console.log({
//     ...citiesRussiaWithPopulation,
//     ...citiesEuropeWithPopulation
// })

// console.log({
//     ...citiesEuropeWithPopulation,
//     ...citiesRussiaWithPopulation
// })


// In Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers)) // Math.max() don't take an array

// const divs = document.querySelectorAll('div') // NodeList(PseudoArray)
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs)) // NodeList(PseudoArray)
// console.log(nodes, Array.isArray(nodes)) // array
// console.log(divs.map())



// ***********Rest***********
/* 
Get Rest members of array
*/
function sum(a, b, ...rest) {
    console.log(rest);
    return a + b + rest.reduce((total, i) => total + i, 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// Spread and functions get only first two members of array
// console.log(sum(...numbers))

// // const a = numbers[0]
// // const b = numbers[1]

// const [a, b, ...other] = numbers
// console.log(a, b, other)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {
    name,
    age,
    ...address
} = person

console.log(name, age, address)