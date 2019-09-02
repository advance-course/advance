/** src/examples/performance/demo001.js */
var person = {
  name: 'Tim',
  age: 20
}

function setting(p, name, age) {
  p.name = name; 
  p.age = age;
  return p;
}

var a = setting(person, 'Jake', 10);

console.log(a);
console.log(person);
console.log(a === person);


var foo = {
  a: 1,
  b: 2
};

var bar = Object.assign(foo, { c: 100 });

console.log(foo, bar);

const arr = [1, 2, 3, 4, 5, 6, 7, 9];
arr.splice(7);

console.log(arr);