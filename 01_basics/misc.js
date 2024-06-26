//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ***********************************Stack and Heap***************************************


//Stack (Primitive) & Heap (Non-Primitive)

let myName = "Ashutosh"

let anotherName = "myname"
anotherName = "Almighty"

console.log(myName);
console.log(anotherName);

let userOne = {
    id : 12345,
    email : "user@google.com"
}

let userTwo = userOne 

userTwo.email = "anything@google.com" //shares the common reference, but the value is changed now 

console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo.id);