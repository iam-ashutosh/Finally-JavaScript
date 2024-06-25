// Well, we are learning JS using "Investigation Study"
// Taking Multiple examples and use cases

let something = "Ashutosh" // string. number, bool, mixed

console.log(typeof something); //rounds brackets are not compulsory
console.log(typeof(something)); // Strings

let valueConversion = Number(something); // Always put the datatype as first letter capital form - "due to some class convention - (discussed later)"
console.log(valueConversion); // NaN - Stands for 'NOTaNUMBER'
console.log(typeof valueConversion); // number


let again = "200BC"; //previous value => 2004
console.log(typeof again); //number, again => string

let againConversion = Number(again);
console.log(typeof againConversion); //String, again => number
console.log(againConversion); // 2004, again => Nan

// typeof (True) => 1 & typeof (False) => 0


let onceAgain = "Anything"; // string, again => with empty string "" => 0
let intoBool = Boolean(onceAgain); 
console.log(typeof intoBool); //Boolean
console.log(intoBool); // True, again => False

let someNumber = 10;

let stringConversion = String(someNumber);
console.log(typeof someNumber); //String
console.log(someNumber); // 10
