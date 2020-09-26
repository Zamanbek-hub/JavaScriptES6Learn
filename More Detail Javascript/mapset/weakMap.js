/* 
По сути WeakMap это тоже самый Map
Есть несколько особенностей:
Но с помощью WeakMap мы можем избегать различных утечек данных в JavaScript e
В случаем если какой либо обьект удалится сборщиком мусора, то это тое удалиться с WeakSet a
Обьяснение ниже
*/

let obj = {
    name: 'weakmap'
}

// const arr = [obj]

/* 
На обычном Map или array если мы  присвоим obj(ссылка на данные)
если мы потом его анулируем, сравним к null, то в Mapб array у obj 
останется данные которые мы в начале указали, 
таким образом у нас может пройзойти утчека памяти

*/
// obj = null;
// console.log(obj) // null
// console.log(arr[0]) //{ name: 'weakmap' }


// In structure of Weakmap keys can be only *Objects*
/* 
В той же самой верхней ситуации WeakMap будет вести себя по другому,
после того как мы присвоили к obj равним null,
дальше в obj в Weakmap у тоже будет null
*/
// const map = new WeakMap([
//     [obj, 'obj data']
// ])
// get, set, delete, has
// console.log(map.has(obj))

// obj = null
// console.log(map.get(obj))
// console.log(map.has(obj))
// console.log(map)


// In Practice
const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {
    name: 'Elena'
}
let alex = {
    name: 'Alex'
}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))