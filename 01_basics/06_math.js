let score  = 300;
console.log(score)

let num = new Number(100);
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(2))

let val = 121.234;
console.log(val.toPrecision(3));

let hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math.abs(-3));
console.log(Math.round(4.8));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(2,3,5,1));
console.log(Math.min(0,1,8,7));

console.log(Math.random());

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)