const requestURL = 'https://jsonplaceholder.typicode.com/users'
// fetch is universal, and almost all browser support them
// In all browsers fetch code will be same

// Fetch automatic return Promise
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        // return response.text()
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Something Wrong')
            e.data = error
            throw e
        })
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Vladilen',
    age: 26
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))