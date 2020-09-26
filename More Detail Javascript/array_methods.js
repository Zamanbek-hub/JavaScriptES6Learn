const people = [
  {
    name: "Vladilen",
    age: 25,
    budget: 40000,
  },
  {
    name: "Elena",
    age: 49,
    budget: 50000,
  },
  {
    name: "Mixail",
    age: 15,
    budget: 1800,
  },
  {
    name: "Vasilisa",
    age: 24,
    budget: 25000,
  },
  {
    name: "Viktoria",
    age: 38,
    budget: 2300,
  },
];

// Default(Initial) Method Iterate
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// // ES 6
// for (let person of people) {
//   console.log(person);
// }

// **********************
// people.forEach(function (person, index, pArr) {
//   console.log(person);
//   console.log(index);
//   console.log(pArr);
// });

// people.forEach((person) => console.log(person));

// ***********Map***********
// Create Array
// const newPeople = people.map((person) => {
//   // Мы можем здесь отрабатывать как угодно новый массив
//   //   return person.name;
//   return `${person.name} (${person.age})`;
// });

// console.log(newPeople);

// ***********Filter***********
// Обычным знакомым нам способом
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);

// С фильтрами JavaScripta a
// const adults = people.filter((person) => {
//   if (person.age >= 18) {
//     return true;
//   }
// });

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// ***********Reduce***********
// Serve for take some final value by iterate array
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }

// console.log(amount);

// By Reduce
// const amount = people.reduce((total, person) => total + person.budget, 0); // 0 is initial value of total
// console.log(amount);

// ***********Find***********
// const igor = people.find((person) => person.name === "Elena");
// console.log(igor);

// ***********FindIndex***********
// const igorIndex = people.findIndex((person) => person.name === "Elena");
// console.log(igorIndex);

// =========Use in Practice=========
/* 
Данная запись называется chain(цепочка) 
желательно при chain е каждый метод выводить на новую строчку
*/

const amount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget),
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log(amount);
