// class Cookie {
//   constructor(color) {
//     this.color = color;
//   }

//   getColor() {
//     return this.color;
//   }

//   setColor(color) {
//     this.color = color;
//   }
// }

// let cookieOne = new Cookie('green');
// let cookieTwo = new Cookie('blue');

// cookieOne.setColor('yellow');

// console.log(cookieOne.getColor());

let num1 = 5;

let num2 = num1;

num1 = 10;

// console.log(`Num1 = ${num1}`);
// console.log(`Num2 = ${num2}`);

let obj1 = {
  value: 11,
};

let obj2 = obj1;

console.log('Before');
console.log(`Obj1 = ${obj1.value}`);
console.log(`Obj2 = ${obj2.value}`);

console.log((obj1.value = 22));

console.log('After');
console.log(`Obj1 = ${obj1.value}`);
console.log(`Obj2 = ${obj2.value}`);
