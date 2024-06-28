
//*****************Dates and Time**************** //
//Note - Standard time starts calculating from "1 jan 1970"

let myDate = new Date() // created an object here 
//=> means type of(mydate) is object as it is initiated in an instance

// console.log(myDate.toString()); // method to convert date into 'readable' string format
console.log(myDate.toDateString()); //Fri Jun 28 2024
console.log(myDate.toLocaleString()); // 6/28/2024, 11:58:27 AM - It includes time too
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // if declared in a single digit - months are always starts from 0 index - jan = 0
let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") // if declared in 'mm' format then it starts from 1- index
// let myCreatedDate = new Date("01-14-2023") // it's the best practice to use mm-dd-yyyy format in india
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1719576078385 - miliseconds - from the standard time 
console.log(myCreatedDate.getTime()); // 1674450180000 -  current time
console.log(Math.floor(Date.now()/1000)); // 1719576078

let newDate = new Date()
console.log(newDate); // 2024-06-28T12:01:18.386Z
console.log(newDate.getMonth() + 1); // 6
console.log(newDate.getDay()); // 5

// `${newDate.getDay()} and the time ` // optimized and correct form to right

newDate.toLocaleString('default', {
    weekday: "long",
    
})
