// Wrapper 
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}


const position = withDefaultValue({
        x: 24,
        y: 42
    },
    0
)

console.log(position)


// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)), // return boolean
        /*
         Object that help to work with objects more in details in get keys
        */
        ownKeys: obj => Reflect.ownKeys(obj) // for iteration
            .filter(p => !p.startsWith(prefix)),

        /*
        На самом деле метод get принимает 3 параметра
        receiver это тот обьект с который мы работаем 
        в нашем случае это Proxy
        */
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0 //return undefined
    })
}

const data = withHiddenProps({
    name: 'Vladilen',
    age: 25,
    _uid: '1231231'
})


// Optimization
const userData = [{
        id: 11,
        name: 'Vladilen',
        job: 'Fullstack',
        age: 25
    },
    {
        id: 22,
        name: 'Elena',
        job: 'Student',
        age: 22
    },
    {
        id: 33,
        name: 'Victor',
        job: 'Backend',
        age: 23
    },
    {
        id: 44,
        name: 'Vasilisa',
        job: 'Teacher',
        age: 24
    }
]


const index = {}
userData.forEach(i => index[i.id] = i) // get keys with value in objects

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) { // args is given array
        const index = {}
        args.forEach(item => index[item.id] = item)
        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push': // users.push({id:55, name:'Sergei'})
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray(userData)