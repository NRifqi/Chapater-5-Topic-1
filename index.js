
// const os = require("os")
// import os from ("os")
const fs  = require("fs")
const sum = require("./sum")
const {say, sub} = require("./say")
const color = require("colors")
const validator = require("validator")
const lodash = require("lodash")
const moment = require("moment")


const isEmail = validator.isEmail('foo@bar.com')
// console.log(isEmail)
if(isEmail){
    console.log("format benar")
} else {
    console.log("format salah");
}
console.log(sum(5,2));
console.log(sub(5,2));
console.log(say());
console.log("hello".red)

console.log(lodash.capitalize("SAYA"))


const valid = require("validator");
const { log } = require("console")

const checkEmail = (email) => {
    if (valid.isEmail(email)) {
        console.log("email is correct");
    } else {
        console.log("its not email");
    }
}
checkEmail("saya.com")

moment.locale("id") // indonesian format 
const time = moment().format()
console.log(time);
console.log(moment().format('dddd Do MMMM YYYY, h:mm:ss a')); // January 26th 2024, 1:40:07 am
console.log(moment().format('dddd'));                    // Friday
console.log(moment().format("MMM Do YY"));   



// check the operating system"
// console.log(os.version())
// console.log(os.cpus())

// read file
// const readFile = fs.readFileSync("say.js")
// console.log(readFile.toString());