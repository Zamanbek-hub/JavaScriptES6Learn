/* 
По сути WeakSet это тоже самый Set
Такая же особенность как у WeakMap
Ключами WeakSet может являться только обьекты
В случаем если какой либо обьект удалится сборщиком мусора, то это тое удалиться с WeakSet a
*/

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

const visits = new WeakSet()

visits.add(users[0]).add(users[1])
//          index, count of elements wants to delete
users.splice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

console.log(visits)