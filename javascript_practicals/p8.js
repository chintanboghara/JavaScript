const name = "chintan"
const repoCount = 50

// console.log(name + repoCount + " Value");        old syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);       New Syntax

const gameName = new String('chintan-cc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   chintan    " //start and End space
console.log(newStringOne);
console.log(newStringOne.trim());  // no space

const url = "https://chintan.com/chintan%20boghara"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //check include or not this character

console.log(gameName.split('-'));  //splitting