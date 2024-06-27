//**************Strings- Syntax, Methods, Right approach**************//


const name = "Ashutosh"
const repoCount = 150

// console.log(name + repoCount + " Value"); // discarded method, decrease readability

//String Interpolation Method- use of (`` - baptics)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // use ($ - dollar sign) & ({} - curly braces)

const gameName = new String('almighty-developer') // another way for defining a string- Using (new - keyword), here we pass the string name in String Constructor.

// console.log(gameName[0]); // Output -(A)
// console.log(gameName.__proto__); {}


console.log(gameName.length); //18 - index starting from zero
console.log(gameName.toUpperCase()); //ALMIGHTY-DEVELOPER
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 8)//0-start num; 4-end num; - 0 to 7 (8 will not be print)
console.log(newString); // No negative indexing is allowed

const anotherString = gameName.slice(1, 8) // Negative Index is alloed
console.log(anotherString);

const newStringOne = "   CAPTAIN AMERICA    " 
console.log(newStringOne); // Print spaces too 
console.log(newStringOne.trim()); // function to trim the forward & backward spaces

const url = "https://almighty.com/hidden%20rain"

console.log(url.replace('%20', '-')) // replace %20 from the URL with (-)

console.log(url.includes('hidden')) // true
console.log(url.includes('Village'))// false 

console.log(gameName.split('-')); // splits the value seperated by - into , comma seperated values


//NOTE - In the console if we define String (using 'new String') method and then call the variable name again in ther next line, then we get the String Indexes.
//format : String {'Almighty'} => onClick = characters with their respective indexes, total length and the prototype with all the string methods get apeared on the screen.
