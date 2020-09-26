const obj = {
    name: 'Vladilen',
    age: 26,
    job: 'Fullstack'
}

// Array
const entries = [
    // key    value
    ['name', 'Vladilen'],
    ['age', 26],
    ['job', 'Fullstack']
]

// // entries == Object.entries(obj)
// console.log(Object.entries(obj))
// // obj == Object.fromEntries(entries)
// console.log(Object.fromEntries(entries))



const map = new Map(entries)

// console.log(map)
map
    .set('key', 42)
    .set(obj, 'Value Of Object')
    .set(NaN, "Nan ??")
// console.log(map.get(obj))
// console.log(map.get(NaN))

// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// Iterate 
// Default in iterate will be call map.entries()
// for (let [key, value] of map) {
//     console.log(key, value);
// }

// for (let value of map.values()) {
//     console.log(value);
// }

// for (let key of map.keys()) {
//     console.log(key);
// }

// map.forEach((value, key, m) => {
//     console.log(value, key);
// })

// ================
// Create Array
// const array = [...map]
// const array = Array.from(map);
// console.log(array)

// Create Object
// const mapObj = Object.fromEntries(map.entries())
/* 
In object keys(fileds) can't be object therefore 
in key(filed) will be wrote toString() of Object)
*/
// console.log(mapObj)

// Practice
const users = [{
        name: 'Elena'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Irina'
    }
]

const visits = new Map()
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastvisit(user) {
    return visits.get(user);
}

console.log(lastvisit(users[2]))