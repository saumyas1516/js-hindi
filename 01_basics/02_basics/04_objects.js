let tinder = new Object();

let user ={

}
user.name = "saumya";
user.id = 123;
user.address = "durgapur";
console.log(user);

let username = {
    fullname:{
        myname:{
            name:"niwesh",
            roll:123
        }
    }

}
console.log(username.fullname.myname);

let obj1 = { 1:"saumya",2:"niwesh",3:"shagufa"}
let obj2 = {4:"golu",5:"aditi",6:"shagg"}

let obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

let obj4 = {...obj1,...obj2};
console.log(obj4);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("address"));