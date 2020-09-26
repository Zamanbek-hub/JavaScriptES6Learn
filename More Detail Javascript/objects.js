//              takes 2 params
/* 
Когда мы так создаем класс при итерации не будет виден ключи которые мы добавили
*/
const person = Object.create({
    // It key will be in proto of Object
    calculateAge() {
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Vladilen',
        enumerable: true, // позволяет видеть при итерации
        writable: true, // позволяет потом изменять значение [person.name = 'Maxim']
        configurable: true // позволяет удалять данный ключ с обьекта [delete person.name]
    },
    birthYear: {
        value: 1993,
        enumerable: false, // default(false)
        writable: false, // значение останутся константами 
        configurable: false // нельзя удалять [delete person.birthyear]
    },
    age: {
        // get and set not method is field (поле)
        get() {
            // In console or in code use will be like this person.age => is get()
            // return ' Hello'
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            // In console or in code use will be like this person.age = 1999 =>is set()
            document.body.style.background = 'red'
            console.log('set age', value)
        }
    }
})

console.log(person)
person.name = 'Maxim'

/* 
В этом случае ключи видны
*/
// const person = {
//     name: 'Vladilen',
//     birthYear: 1993
// }

for (let key in person) {
    if (person.hasOwnProperty(key)) { // we don't run in proto
        console.log('Key = ', key, person[key])
    }
}