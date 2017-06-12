// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Stevie'];
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//hi andrew, you are 25.
function greeter(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greeter(...person);
greeter(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Zac', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
})
