const myNumber = 42

/*
* LocalStorage умеет работать только со строками
* даже если положить туда другой тип данных
* при запросе вы получите строку
*
* Localstorage работает для текущего домена, адреса
*
* Данные в LocalStorage будет доступны после перезагрузки
*
*
* Чем отличается LocalStorage от Cookie
* У LocalStorage память больше, макс: 5 мб
* Основное отличие в том что Cookie улетает на сервер
* вместе с запросом и это может быть не безопасно
* Localstorage не улетает на сервер, это ваше локальное хранилище
* */

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()


const object = {
    name:'Max',
    age:20
}

/*
* On get person we get str "[Object obbect]"
* */
// localStorage.setItem('person', object)
// localStorage.getItem('person')

/*
* We should use JSON.stringify()
* */
localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person') // get String
const person = JSON.parse(raw) // get object

// =======================
/*
* Если наше приложение(сайт) открыт
* в разных вкладках, мы все это можем
* синхронизировать
*
* Если же мы внесем какие то изменени в LocalStorage
* никакого ответа от нижнего слушателя не будет
* Но если одновременно открыть несколько вкладок с этим доменом(адрес),
* на другой вкладке можно увидеть ответ
* Примеры на фото в текущей директории: tab1, tab2
* */
window.addEventListener('storage', event => {
    console.log(event);
})