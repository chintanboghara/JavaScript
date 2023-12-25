// Stack and Heap Memory

// Stack (copy) (Primitive) 

let myName = "Chintan"

let anotherName = myName
anotherName = "Beast"

console.log(myName);
console.log(anotherName);

// Heap (Reference) (Non-Primitive)

let userOne = {
    email: "chintan@google.com"
   
}

let userTwo = userOne

userTwo.email = "beast@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);