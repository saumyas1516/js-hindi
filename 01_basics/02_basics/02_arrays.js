let marvel = ["spiderman","superman","thor"]
let me = ["saumya","niwesh","shaguu"]

let ans = marvel.concat(me);
console.log(ans);

let allnew = [...marvel , ...me]
console.log(allnew);

let another = [1,2,3,[4,5,6,[7,8,9]]]
let realanother =another.flat(Infinity)
console.log(realanother);

let score =100;
let score2 =200;
let score3 = 300;

console.log(Array.of(score,score2,score3))

console.log(Array.from("saumya"))