let date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof(date));

let mydate = new Date(2024,0,24);
console.log(mydate.toDateString());

let createdate = new Date("01-24-2024");
console.log(createdate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(createdate.getTime());

console.log(Math.floor(Date.now()/1000))

let newdate = new Date();
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default' ,{
    weekday: "long"
})