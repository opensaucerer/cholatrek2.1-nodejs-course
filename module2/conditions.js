// What do you do when you need to run a code based on certain circumstances? Well, you create a condition!
// Conditional Statements allow you to run a block of code when a certain condition, defined by you, is met.
// To do this, there are various options in JavaScript and they are:

// IF… ELSE
// SWITCH CASE

var _name = 'Moses';

var _age = 18;

var _class = 'JSS 2';

// conditionals
if (_name === 'David' && _age === 18) {
  console.log(`${_name} is eligble for a Scholarship`);
} else if (_name === 'Michael' || _age === 10) {
  console.log(`${_name} is currently not eligble`);
} else {
  console.log('Please try again next time.');
}

// nested conditionals
if (_name === 'David' && _age === 18) {
  console.log(`${_name} is eligble for a Scholarship`);
  if (_class === 'JSS 1') {
    console.log('You are eligble for the Junior level scholarship');
  } else {
    console.log('You are only eligble for a basic scholarship');
  }
} else if (_name === 'Michael' || _age === 10) {
  console.log(`${_name} is currently not eligble`);
} else {
  console.log('Please try again next time.');
}

// switch case
switch (_name) {
  case 'David':
    console.log('This is David');
    break;
  case 'Michael':
    console.log('This is Michael');
    break;
  default:
    console.log(`This is ${_name}`);
}
