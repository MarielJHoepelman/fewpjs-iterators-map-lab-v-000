const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}


const titleCased = () => tutorials.map(function(element){
  for (const e of element.split(' ')) {
    console.log(capitalize(e))

  }

  return element;
});

// let rollCall = students.map(function(student) {
//   return student + " the wizard";
// });
