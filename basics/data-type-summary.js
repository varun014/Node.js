// Primitive


// 7 types : String, Number , Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id == anotherId);

 const bigNumber = 345744233231214987494n



// Reference Type (Non-Primitive)

// Array, Objects, Functions


const heors = ["shatkiman","naagraj" , "doga"]
let myobj ={
    name: "varun",
    age: 23,
}


const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction)