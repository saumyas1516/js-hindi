let one = "saumya"
let two = "singh"

console.log(one+" "+two)

console.log(`my name is ${one} and my surname is ${two}`)

let gamename = new String("saumya-sing-h")
console.log(gamename)
console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt('2'));
console.log(gamename.indexOf('t'));

let num = gamename.substring(0,4);
console.log(num);

const anothernum = gamename.slice(-5,1)
console.log(anothernum);

let names = "   saumya    "
console.log(names)

console.log(names.trim())

let url= "https://github.com/saumyas1516/js%hindi/tree/main/01_basics";

console.log(url.replace('%', '-'))
console.log(url.includes('suna'))
console.log(gamename.split('-'))
