// singleton

// object literals
// object.create

const mySym = Symbol("key1")
const JsUser = {
    name : "Varun",
    "full name" : "varun goyal",
    [mySym] : "myKey1",
    age : 18,
    location : "jaipur",
    email : "varungoyal014@gaoogle.com",
    isLoggedIn: false,
    lastloginDays:["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "varungoyal@gmail.com"
// Object.freeze(JsUser)

JsUser.email = "varungoyal@chatgpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js User")
}


JsUser.greetingTwo = function(){
    console.log(`hello Js User,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());