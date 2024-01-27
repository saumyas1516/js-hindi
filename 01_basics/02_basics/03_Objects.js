//singleton
// Object.create

// object literals

let sym = Symbol("key1");

let user ={
    name:"saumya",
    age: 23,
    [sym] : "itsme",
    location:"durgapur",
    lastlogin: ["monday" ,"tuesday"]
}
console.log(user.name);
console.log(user["location"]);
console.log(typeof user[sym]);

user.name = "niweh"
//Object.freeze(user);
user.name = "navneet"
console.log(user);

user.greeting = function(){
    console.log("hello i am function")
}

user.greet = function(){
    console.log(`this is func 2 ${this.name}`)
}
console.log(user.greeting());
console.log(user.greet());