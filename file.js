const { log } = require("console");
const fs = require("fs")

fs.writeFileSync("./text.txt",'My name is Prabesh Magar')

fs.writeFile("./text.txt",'My name is Prabesh Magar', (error)=>{});

console.log("1")
let newNum = fs.readFileSync("contact.txt", "utf-8")
console.log(newNum);

console.log("2")



