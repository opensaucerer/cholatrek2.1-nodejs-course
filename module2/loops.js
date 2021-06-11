// Loops allow you to easily perform multiple tasks in a repeated pattern and even make use of conditionals along with this repetition.

// JavaScript supports different kinds of loops:

// for
// forEach
// while

var names = ['Moses', 'James', 'Michael', 'Perfection'];

// standard for loop
for (var i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  if (names[i] == 'Perfection') {
    console.log('This is the NODEJS tutor');
  } else {
    console.log('This is ' + names[i]);
  }
}

// while loop
var l = 0;
while (l < names.length) {
  console.log(l);
  l++;
}
var i = 5;
var j = 10;
var checker = i <= j;

console.log(checker);

while (checker) {
  console.log(`This is the ${i} iteration`);
  i++;
  checker = i <= j;
}

// forEach
names.forEach((_name) => {
  console.log(_name);
});
