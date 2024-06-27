
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Gives values between 0 to 1 range - means like, 0.4,0.5 etc

console.log((Math.random()*10) + 1); // Multiplying by ensures that the value that'll come should be greater than (1) & (+1) ensures that the value shouldn't be coming 0.
console.log(Math.floor(Math.random()*10) + 1); // floor function truncates the values after the decimal


//Range
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Min & Max are used when we required the values to come in certain range.
