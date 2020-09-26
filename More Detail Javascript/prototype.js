// Main Method Create
// const person = {
//   name: "Maxim",
//   age: 25,
//   greet: function () {
//     console.log("Greet");
//   },
// };

const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet");
  },
});

// Access to Parent Object
// CREATE TO Object proto new method
Object.prototype.sayHello = function () {
  console.log("Hello");
};

const lena = Object.create(person);

// Its not change the value
// It works from up to down
// Watch in console
lena.name = "Elena";

// In Javascript All is Objects
const str = "I am string";

// In Javascript All is Objects
const str2 = new String("I am string");
