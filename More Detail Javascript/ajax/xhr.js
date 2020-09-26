const requestURL = 'https://jsonplaceholder.typicode.com/users'



function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        // xhr is XmlHTTPRequest
        const xhr = new XMLHttpRequest()


        //        method, url
        xhr.open(method, url) // open request 

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            // console.log(JSON.parse(xhr.response));

            // All that more than 400 is error
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            // console.log(JSON.parse(xhr.response));
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body)) // send request
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