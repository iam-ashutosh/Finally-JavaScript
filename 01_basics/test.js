//Note :- 1. A program must contain these characteristics, 
//Highly Readable, Better future scope and easy to modify,



/*const accountId = 2004 
let accountName = "Almighty" 
var accountPass = "12345" 
userCity = "Fridabad" 
let accountstate ; // undefined*/

/*
Prefer not to use var
because of issue in block scope and functional scope

[] - used to get array
{} - used to get objects 

(;) - is not compulsory to put at the EOL
*/

//console.table({accountId, accountName, accountPass, userCity, accountstate})
//console.table([accountId, accountName, accountPass, userCity, accountstate]) 



"use strict"; // treat all JS code as a newer version

// always refers to the MDN reference for any query

//alert = (anything); //gives error as - We are using Node js not browser, javascript engine is inside the browser.


// Datatypes in JS (Primitive)
// number => 2 to the power 53
// string => ""
// bigint => more than 53 
// boolean => True/False
// null => standalone value 
// undefined => vacant
// symbol => unique -  for designing components, plug-ins etc.

//(Non-Primitive)
// object
// array

console.log(typeof(null)); //object
console.log(typeof(undefined)); //undefined


