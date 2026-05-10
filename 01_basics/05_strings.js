const name = "varun"
const repoCount = 50

// console.log(name+repoCount + "value");

console.log('hello my name is ${name} and my repo count is ${repoCount}');


const gameName = new String("varun-hc")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(-5, 1)
console.log(anotherString);

const newStringOne = "  varun   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))


// we can find if url contain this word or not
console.log(url.includes('hitesh'))

console.log(gameName.split('-'));