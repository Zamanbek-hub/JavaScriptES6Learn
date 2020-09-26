// function* strGenerator() {
//     yield 'H'
//     yield 'E'
//     yield 'L'
//     yield 'L'
//     yield 'O'
// }

// // In console *str.next()*
// const str = strGenerator()

// function* numberGen(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }

// const num = numberGen(7)

/*

Self Realization of Generator Yield
*/
// const iterator = {
//     // gen(n = 10)
//     [Symbol.iterator](n = 10) {
//         let i = 0

//         return {
//             next() {
//                 if (i < n) {
//                     return {
//                         value: ++i,
//                         done: false
//                     }
//                 }
//                 return {
//                     value: undefined,
//                     done: true
//                 }
//             }
//         }
//     }
// }

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

// for (let k of [1, 1, 2, 3, 5, 8]) {
//     // console.log(k)
// }

// for (let k of iterator) {
//     console.log(k)
// }

for (let k of iter(6)) {
  console.log(k);
}
