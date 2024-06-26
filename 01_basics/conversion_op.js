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




// ***************************************CONVERSIONS*********************************************


let value = 3
let negValue = -value // negative value
// console.log(negValue);

// console.log(2+2); //4
// console.log(2-2); //0
// console.log(2*2); //4
// console.log(2**3); //8 - exponent
// console.log(2/3); // division - 1.5
// console.log(2%3); //1 -modulo

let str1 = "hello"
let str2 = "almighty"

let str3 = str1 + str2
// console.log(str3); //hello almighty

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log( 3 + 4 * 5 % 3); //discarded way-decrease readability

// console.log(+true); //1
// console.log(+""); //0 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //oversmart way but usually not accepted as it creates confusions

let gameCounter = 100
++gameCounter; // prefix
gameCounter++; // postfix
//console.log(gameCounter); 101 & 102 - if we put both statements 

// link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion