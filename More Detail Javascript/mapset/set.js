const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6, 'member'])

set.add(10).add(20).add(30).add(10)

// console.log(set);
// console.log(set.has(42))
// console.log(set.size)
// console.log(set.delete(10))
// console.log(set.size)
// console.log(set.clear())
// console.log(set.size)


// keys and values are the same
/* 
Set is a simplified variant of Map 
Set.keys() need to there is compatibility with Map
*/
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// for (let key of set) {
//     console.log(key);
// }


// In Practice
function uniqValues(array) {
    return [...new Set(array)]
    // return Array.from(new Set(array))
}

console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6]))