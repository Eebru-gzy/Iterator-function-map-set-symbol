//Iterator Example

function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done: true};
        }
    }
}
const nameArr = ['eebru', 'ope', 'yemi'];

const names = nameIterator(nameArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());
console.log(names.next());


//Generator function: 
//literally does the same thing as the first

function* sayNames () {
    yield 'eebru';
    yield 'ope';
    yield 'yemi';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());


//number generator
function* numbers () {
    let num = 0
    while(true) {
        yield num++
    }
}

const gen = numbers();

console.log(gen.next().value)