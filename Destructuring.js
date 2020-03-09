//Destructuring Assignment

// let a, b;
// [a, b] = [100, 200]; // a = 100, b = 200;
// //rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500]; //set the rest values into the rest array(auto-set)

// console.log(rest); //[300, 400, 500];

// //for obj
// ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});



////Array Destructuring

// const names = ['eebru', 'ope', 'yemi'];
// const me = [name1, name2, name3] = names;

// console.log(name1, name2, name3)

//parse array returned from function
function getMyName () {
    return ["eebru", "ope", "yemi"];
}

const me = [name1, name2, name3] = getMyName();
// console.log(me);


// object destructuring

const person = {
    name: 'eebru',
    age: 30,
    gender: 'male',
    city: 'lagos'
}

//Es5

// const name = person.name,
//       age = person.age,
//       gender = person.gender,
//       city = person.gender



//Es6 Destructuring

const destruct = {name, age, gender} = person;

console.log(name, age, gender);










