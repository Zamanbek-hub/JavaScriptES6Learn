const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

/*
=> why we do return 
это поможет нам избегать вложенностей внутри функции
*/
// function fetchToDos() {
//     console.log('Fetch todo started')
//     /*
//     => fetch(url)
//     IN javascript ES6 automatically return object
//     */
//     return delay(2000).then(() => fetch(url)).then(response => response.json())
// }

// fetchToDos().then(data => {
//         console.log('Data:', data)
//     })
//     .catch(e => console.error(e))

/* 
If await in function then function should be async like in Python
    Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript
that can run in any browser (even the old ones). It makes available all the syntactical 
sugar that was added to JavaScript with the new ES6 specification, including classes,
fat arrows and multiline strings.
    Babel когда видит async он обарачивает его Promise
    It means Babel translate async, awaits to Promise and to code like from above
    It means async, await only serves to easy read, write and etc.(syntactical sugar)
*/
async function fetchAsyncTodos() {
    console.log('Fetch todo started')
    try {
        /* 
            почему Await он гарантирует то что мы не пройдем к след блоку пока он не выполнится
            это дает нам преимущества не работать с callback ами типа как then()
            и код наиболее понятен
        */
        await delay(2000) // await = before await don't execute program don't go to next row
        const response = await fetch(url) // await treat(обработает) fetch
        const data = await response.json()
        console.log('Data:', data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('Finally')
    }
}

fetchAsyncTodos()