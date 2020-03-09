//SETS - store unique values of any data type. they are not key value pair, they ust holds values

const set1 = new Set();

//adding values to sets
set1.add(100);
set1.add(100);   //cant hoold
set1.add(function name () {return 'me'});
set1.add({a: 'me'});
set1.add('A string');
set1.add(true);
set1.add([1,2,3]);

//it holds values of diffrent data types, and cannot hold the same data type and value together
console.log(set1);

//another pattern
const set2 = new Set([199, true, 'string', function() {return 'hey'}, [1,3,4], {hey: 'hi'}])
console.log(set2);


//get size
set2.size

//check for values
console.log(set2.has(function() {return 'hey'}));  //returns true for primitives, false for reference type.
//can take expression that equals to a primitive value set in it
console.log( set1.has(50 + 50));

//delete
set1.delete(100);


//iterate through sets
for (let item of set1) //can use .keys() and .values() and still get the values
    console.log(item)

//for each

set1.forEach((values) => {
    console.log(values)
})


//convert to array

console.log(Array.from(set1));
