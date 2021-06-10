// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent
// JSON is "self-describing" and easy to understand

// JSON.parse()
// JSON.stringify()

var data = [
  {
    name: 'Perfection',
    skills: ['JavaScript', 'Python', 'NodeJS', 'Flask'],
    organization: 'Cholatrek',
  },
  {
    name: 'Samuel',
    skills: ['Dart', 'Flutter', 'NodeJS', 'GIT'],
    organization: 'Cholatrek',
  },
];

// converting JSON into string
newData = JSON.stringify(data);

// converting JSON string into JSON object
console.log(JSON.parse(newData));

console.log(typeof JSON.parse(newData));
