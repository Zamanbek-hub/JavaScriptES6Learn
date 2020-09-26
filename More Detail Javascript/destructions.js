function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}

// const result = calcValues(42, 10);

// Extra code
// const sum = result[0];
// const sub = result[1];

// const [sum, sub, mult] = calcValues(42, 10);
// const [sum, , mult] = calcValues(42, 10);

/* 
***********Array destruction***********
При работе с деструктуризацией можно задавать дефаултные значение
*/
const [sum, sub = "No substractions", mult, ...other] = calcValues(42, 10);

// console.log(sum, mult, other, sub);

//Objects
const person = {
  name: "Max",
  age: 20,
  address: {
    country: "Russia",
    city: "Moscow",
  },
};

// const name = person.name
/* 
***********Object destruction***********

we can get element values by key: {name}
or we can set new name them {name:firstName}
*/
// const {
//   name: firstName = "No name",
//   age,
//   car = "No car",
//   address: { city: homeTown, country },
// } = person;
// console.log(firstName, age, car, homeTown, country);

// const { name, ...info } = person;
// console.log(name, info);

// **********In Practice**********

// function logPerson(per) {
//   console.log(per.name + "" + per.age);
// }

function logPerson({ name: firstName = "111", age }) {
  console.log(firstName + " " + age);
}

logPerson(person);
