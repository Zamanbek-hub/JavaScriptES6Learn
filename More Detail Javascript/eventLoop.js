// Async [Web Api -> CallBack Queue -> Call Stack]
// EventLoop


// this function doesn't fall t0 Web Api 
// its immediately fall to CallBack Queue then Call Stack
console.log('Start')

setTimeout(function () {
    console.log("Example of this fucntion falls to Web Api then Callback Queue")
}, 0)

console.log('Start 2')

function timeout2Sec() {
    console.log('timeout2Se')
}


// Сохраняет в стэке и ждет времени выполнения
//  стэк работает по принципу очереди (Queue)
window.setTimeout(function () {
    console.log("Inside timeout, after 2000 seconds")
}, 2000)

setTimeout(timeout2Sec, 2000)

console.log('End')