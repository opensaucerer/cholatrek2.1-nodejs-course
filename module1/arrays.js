// An array is a special variable, which can hold more than one value at a time.

// array indexing
// modifying data in an array
// push() add a new item to the end
// pop() remote an item from the end
// splice()  remove or add item at certain positions
// slice() slice out a part of an array
// deleting elements in an array

var myArray = [2, 3, 6, 9];

console.log(myArray);

// modifying array data
myArray[2] = 'GOAT';

console.log(myArray);

// array methods
// push method
myArray.push('NEW DATA');

console.log(myArray);

// pop method
myArray.pop();

console.log(myArray);

var x = myArray.pop();

console.log(x);

// splice method
console.log(myArray);
// adding item with splice
myArray.splice(2, 0, 'Perfection', 'Loveday');

console.log(myArray);

// removing item with splice
myArray.splice(2, 3);

console.log(myArray);

// slice method
var newArray = myArray.slice(0, 2);

console.log(newArray);

// deleting in an array
console.log(myArray);

delete myArray[0];

console.log(myArray);
