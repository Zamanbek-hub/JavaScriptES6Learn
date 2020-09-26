// Channel :DKA-DEVELOP


// Video 2 and Video 3 variables, identifieres
// // let firstName = "James James Bond";
// let age = 2;
// // 10;
// let divider = 3;
// console.log(age+divider);
//
// let a = b = 27;
//   // we can write
// console.log("ddasdas",a+b,console);

// Video 4 objects

// let car = {
//   color:'green',
//   maxSpeed :250,
//   audio:{//object in object
//     brand:'Sony',
//     spekers:12
//   },
//   cost:50000
// }; //object
//
// let car2 = {
//   color:'black',
//   maxSpeed :250,
//   audio:{//object in object
//     brand:'Sony',
//     spekers:12
//   },
//   cost:50000
// }; //object
//
// let carProp = 'color';
// car[carProp] = 'black';
//
//
// car.color = 'green'
// console.log(typeof car.audio)
//
// console.log(car.audio.brand)
//
//
//
// // Video 5 IF else
// if(car.color == "red"){
//   console.log('Red')
// }
// else if(car.color=="green"){
//   console.log('Green')
// }
//
//
// car.color == 'green' ? console.log('Green') : console.log('red')
//
//
//
// //Video 6 Functions
//
// colorReset(car);
//
//
// function colorReset(theCar){
//   theCar.color = "yellow";
//   console.log("In Function = ",theCar.color);
// }



//Video 6 Return fucntions

// let car = {
//   maxSpped:240,
//   update:speedChange
// };
//
// car.update();
//
//
// let speed = speedChange;//function leads yourself like objects
// speed();//appeal = обращение
//
// function speedChange(){
//   console.log(car.maxSpeed);
// }
//
//
//
// console.log(watch("Simple word"))
//
// function watch(message = "hiii"){
//   return message + " user";
// }




//Video 7 Anonym Functions
// function(){ //Impossible
//   console.log("we are anonymous ")
// }


// let anonym = function name() { //IMPossible
//   console.log("we are anonymous ")
// }
// name();

// let anonym = function name (){ //Possible Anonym function
//   console.log("we are anonymous ");
// }
// anonym();
//
// (function(){ //Possible Anonym function
//   console.log("you are anonymous");
// })(); //we can give to brackets time of delay // немедленно вызываемая при рендеринге функция
//
//
// // Стрелочные Функции
// let anonym2 = () => console.log("you are anonymous 2");
// let anonym3 = () => "we are anonymous 3"; //return fucntion no need write return
// let anonym4 = (message) => { //we should write return
//   let count = 2;
//   return message + 2;
// }
// anonym2();
// console.log(anonym3());
// console.log(anonym4(5))


// Video 9 Methods in objects and ARRAYS
// let car = { // Old Standard Type
//   color:"red",
//   open: function(message){
//     console.log(message)
//   }
// }
//
// car.open()

// New Standard Type
// let car = {+
//   color:"red",
//   open(message){
//     console.log(message)
//   }
// }
//
// car.open('Open')

// let car = {color:'red'}
// let arr = [1,3,10,69] // Гомогенный массив
// let arr2 = [10, 'Just about world',  'Haiii', {color:'red'} ]//Негомогенный массив
// console.log(arr2[1] + " " + arr2[2])
//
// //homework
// let car2 = {
//   drivers: ['Paul', 'Stiven'],
//   getdriver(){
//     console.log("Drievrs of this car: " +  this.drivers + " drivers")
//   }
// }
//
// car2.getdriver()





// Video 10 Loop and Increment
// Just Example for future
// strip.setPixelColor(1,strip.Color(0,255,0)) // Функция которая отвечает за горение светодиодов
 // let i = x = 10;
 // i = -i; // унарный оператор
 // i = i + x;//бинарный оператор
 // console.log(i);
// let i = 2;
// i += 2;// Increment
// i -= 2; // Decrement
// i++;//Postfix Increment
// ++i;// Prefix Increment

// let drivers = ['Ivan', "Sergey", "Egor"]
//
// for(let i = drivers.length - 1; i >= 0; i--){
//   console.log(drivers[i]);
// }



// Video 11 Classes and objects
// let hater = { // Object
//   firstName: 'Bill',
//   lastName:'Gates',
//   getName(){
//     return this.firstName + ' ' + this.lastName; // Old Standard type
//     return `${this.firstName} ${this.lastName}`;// New Standard type интерполяция переменных почитать в инете
//   }
// }
//
// console.log(hater.getName())


//Class
//
// class Hater{
//   constructor(firstName,lastName){ // Обезятельно писать constructor
//     console.log("hi i am constructor");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }//Может быть только в одном экземпляре
//
//   sayName(){
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }
//
//
//
//  let Kevin = new Hater('Kevin', 'Makalaster');
//  Kevin.sayName();

//Create classes by old Standard type
// function Bloger(firstname,lastname){
//   this.firstName = firstname;
//   this.lastName = lastname;
// }
//
// Bloger.prototype.sayName = function () {
//     console.log(this.firstName + "  " + this.lastName);
// };
//
// let newBloger = new Bloger('Cereal', "HAcker");
// newBloger.sayName();


// //Video 12 Word with DOM(Document Object Model) with HTML docs
// console.log(document.getElementById('header'));
// console.log(typeof document.getElementById('header'));

// document.getElementById('header').innerText = "Hi";
// console.log(document.getElementById('header'));

//Other type CSS selectors JQuery
// let findElement = document.querySelector('.myclass')//Selector of class;
// let findElementFromDiv = document.querySelector('div.myclass');
// console.log(findElement);
// console.log(findElementFromDiv);

// let findElementByAttribute = document.querySelector('[value="30"]');
// findElementByAttribute.value = 100;
// console.log(findElementByAttribute);



//Дополнительное знание многие из Standard EcmaScript 6
// let a = +-Infinity; // number
// let a = Nan; //not number
// let a = null;
// let a = undefined;
// let a = Symbol();
// const pin = 1;
// let a = " he sad \\ \"HI\" " // ignoring
// findElementByAttribute.value = a;
// console.log(a);
//
// let b = 10;
// let c = `he sad ${b} Hi`; // like: "he sad" + b +  "Hi"
// findElementByAttribute.value = c;








//HOMEWORK
// class Car{
//   constructor(speed){
//     this.speed = speed;
//   }
//
//   viewSpeed(){
//     return `My speed: ${this.speed}`;
//   }
// }
//
// let audi = new Car(200);
// document.querySelector('.car').innerText = audi.viewSpeed();
//
// audi.speed = 300;
// document.querySelector('.car2').innerText = audi.viewSpeed();



// Video 14
//Node.JS // interpretator JavaScript to Server or BackEnd
// const myCar = {
//     make:'BMW'
// }

// console.log(`My car: ${myCar.make.length}`)
// //Commands to CMD by node.js
// //node -v
// //node app.js // to run code (file)



//Video 15 
// NPM // Secretar of Node.js 
//directory of JS's libraries
//npm // Main Goal: automatization of adding need libraries to project
//Yarm // Alternate version to NPM
// Example to NPM install JQuery
//npm i query // in cmd or terminal




//Gosha Dudar
function buttonClick(nutton){
    alert("You entered to button : " + nutton.name)
}

let count = 0;
function Counter(element){

    count++;
    element.innerHTML = `Clicked on this text ${count} times`;
}


function valid(form){
    let fail = false;
    let name = form.name.value;  
    let email = form.email.value;
    let pass = form.password.value;
    let repass = form.RePassword.value;
    let state = form.state.value;

    var add_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i; //регулярное выражение типо языка
    
     if(name == "" || name == " ")
        fail = "You did not entered your name";
    // else if(email.split('@').length == 0)
    //     fail = "You  entered wrong email";
    else if(add_pattern.test(email) == false)
        fail = "You entered wrong email";
    else if(pass == "")
        fail = "You did not enter password;"
    else if(pass != repass)
        fail = "Passwords not same;"
    else if(state == "")
        fail = "Your Gender";

    if(fail)
        alert(fail);
    else 
        window.location = "https://google.com"; //перенаправление

}


//Timers

// var id = setInterval("MyFunct_1()", 1000)
let counter = 0;

// function MyFunct_1(){
//     counter++;
//     alert("Second pass - " + counter);
//     if(counter == 3) clearInterval(id);
// }
let minute = 0;
function timer(){
    counter++;
   
    if(counter >= 60){
        minute += 1;
        counter -= 60;
    }
    if (minute == 0)
        document.getElementById("count").innerHTML = counter;
    else 
        document.getElementById("count").innerHTML = minute + " : "  + counter;
    
    setTimeout("timer()",1000);
}

//Math Library
let text = Math.PI;
console.log(text);
text = Math.E;
console.log(text)
text = Math.abs(-10);
console.log(text);
text = Math.sin(0.3);
console.log(text);
text = Math.random();
console.log(text);
text = Math.floor(5.3);
console.log(text);
text = Math.ceil(5.3);
console.log(text);
text = Math.floor(Math.random() + 10);
console.log(text);


//DAte and Time
let date = new Date();
console.log(date);
console.log("YEar ", date.getFullYear());
console.log("Month ", date.getMonth());


var date1 = new Date(2000,0,12,14,23,42);
console.log(date1);

      