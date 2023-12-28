// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Chintan",
    "full name": "Chintan Boghara",
    [mySym]: "mykey1",
    age: 18,
    location: "Dubai",
    email: "chintan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // Access Objects
// console.log(JsUser["email"]) // 
// console.log(JsUser["full name"]) //
// console.log(JsUser[mySym]) //

JsUser.email = "chintan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "chintan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());