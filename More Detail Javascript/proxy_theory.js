const person = {
    name: 'Vladilen',
    age: 25,
    job: 'Fullstack'
}
// op : objectProxy
const op = new Proxy(person, {
    // method get(target, prop) takes 2 params
    get(target, prop) {
        /*
         We can overwrite(переписывать логику, обрабатывать) 2 basic functionalities 
        */
        // console.log('Target', target)
        // console.log('Prop', prop)


        if (!(prop in target)) {
            // in console we can 'op.name_age_job'
            return prop.split('_').map(part => target[part]).join(' ')
        }
        return target[prop]
    },
    set(target, prop, value) {
        /*
         We can overwrite(переписывать логику, обрабатывать) 2 basic functionalities 
        */
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`no ${prop} field in target`)
        }
    },
    has(target, prop) {
        /*
         We can overwrite(переписывать логику, обрабатывать) 2 basic functionalities 
        */
        // in console *'name' in op*
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true
    }
})

// Function
const log = text => `Log: ${text}`

// fp : functionProxy
const fp = new Proxy(log, {
    // target its function
    // thisArg its context
    // args its all parameters that we give to this func
    apply(target, thisArg, args) {
        console.log('Calling fn...')

        return target.apply(thisArg, args).toUpperCase()
    }
})

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')
        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop ${prop}`)
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30)