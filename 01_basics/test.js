const prompt = require("prompt-sync")({sigint: true});
//console.log('Hello, I am Ashutosh')


/*function multiplyNumbers(a, b) {
    return a * b;
  }
  
  // Example usage
  var number1 = 5;
  var number2 = 8;
  
  var product = multiplyNumbers(number1, number2);
  console.log("The product of", number1, "and", number2, "is:", product);*/

  function multiplyNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    
    var result = a * b;
    
    if (result % 2 === 0) {
      console.log('The product is an even number');
    } else {
      console.log('The product is an odd number');
    }
    
    return result;
  }
  
  // Example usage with user input
  var number1 = parseInt(prompt("Enter the first number:"));
  var number2 = parseInt(prompt("Enter the second number:"));
  
  var product = multiplyNumbers(number1, number2);
  console.log("The product of", number1, "and", number2, "is:", product);