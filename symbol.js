// const sym1 = Symbol();
// const sym2 = Symbol('sym2');  //can take identifier


// console.log(sym1 === sym2);  // false, no symbol is equal to another
// // cant be turned to string in template literal, but can be converted to string
// // console.log(`hello ${sym1}`);
// console.log(`hello ${sym1.toString()}`); //or
// console.log(`hello ${String(sym1)}`); 

//unique obj Keys 

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const obj = {};

obj[KEY1] = 'prop1';
obj[KEY2] = 'prop2';
obj.key3 = 'prop3';
obj.key4 = 'prop4';


// console.log(obj[KEY1]);
// console.log(obj[KEY2]);

//symbols are not innumerable in for-in


for (let i in obj) {
    console.log(`${i}: ${obj[i]}`);  //this produces the prop3 and 4 because symbols aren't innumerable
}




//Symbols are ignored by json.stringify

console.log(JSON.stringify({me: 'eebru'}));  //stringify the obj
console.log(JSON.stringify({[Symbol('me')]: 'eebru'}));   //return emty obj