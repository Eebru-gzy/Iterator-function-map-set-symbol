//MAPS: object with key-value pairs - can use any type of data for key or value

const map1 = new Map();

// iniializing keys to any type of data
const key1 = 'something',
      key2 = [1],
      key3 = {},
      key4 = function() {}

//set value to map by keys: nb; it doesn't run reference type data
map1.set(key1, 'value of key 1');
map1.set(key2, 'value of key 2')
map1.set(key3, "value of key 3")
map1.set(key4, 'value of key 4')

//key values of map by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));
// console.log(map1.get(key4));


//counting map values
// console.log(map1.size);


//iterating through maps

//using for-of
for (let [key, value] of map1) {
    //console.log(`${key}  =  ${value}`)
}

//keys only
for (let key of map1.keys()) {
    //console.log(key)
}

//values only
for (let value of map1.values()) {
    //console.log(value)
}

//forEach
map1.forEach((value, key) => {
    //console.log(`${key}  =  ${value}`);
})

//converting to array

//ceate an of the key value pair
const keyValArr = Array.from(map1); console.log(keyValArr);
// only keys
const keyArr = Array.from(map1.keys()); console.log(keyArr);
// only values
const valArr = Array.from(map1.values()); console.log(valArr);









