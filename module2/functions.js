// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

// In JavaScript, we have the following types of functions

// anonymous functions
// named functions
// arrow functions

// To use a function, you must define it somewhere in the scope from which you wish to call it.

// named function
function checker(_name, _age) {
  console.log(_name);
  console.log(_age);

  if (_name === 'David' && _age === 20) {
    console.log('Welcome David');
  } else {
    console.log('Access Denied!');
  }
}

checker('David', 20);

// anonymous functions
var total = 0;
logger = function (data) {
  console.log(data);

  data.forEach((element) => {
    total += element;
  });

  console.log(total);
};

logger([2, 3, 4, 5, 6, 7]);

// arrow function
naming = (data) => {
  console.log(data);

  data.forEach((element) => {
    total += element;
  });

  console.log(total);
};

naming([1, 9, 0, 3, 5]);
