// --------------------------------------
console.log(">------------------------------Exercise 3-----------------------------------------<");

// Exercise 3 - Add numbers from string to float
const numberOne = "1.10";
const numberTwo = "2.30";

// --------------------------------------
// 1. løsning
const numberOneNumber = (parseFloat(numberOne));
const numberTwoNumber = (parseFloat(numberTwo));
console.log(numberOneNumber);
console.log(numberTwoNumber);

// typeof
console.log(typeof (numberOneNumber));


// --------------------------------------
// 2. løsning - concatenation
console.log("First number: " + numberOneNumber);
console.log("Second number: " + numberTwoNumber);


// --------------------------------------
// 3. løsning - string literal
console.log(`The first number is ${numberOneNumber} and the second number is ${numberTwoNumber}`);



// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// 1. løsning
const result =  numberOneNumber + numberTwoNumber;
console.log(result);


// --------------------------------------
// 2. løsning
const resultfloats = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(resultfloats);



console.log(">------------------------------Exercise 4----------------------------------------<")

// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// 1. løsning
// havde jeg her skrevet console.log(Number(result2.toFixed(2))); vilel 0 blive fjernet når det udskrives, da det er overflødigt
const result2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(result2.toFixed(2)); 

// 2. løsning
const result3 = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);
console.log(result3);



console.log(">------------------------------Exercise 5-----------------------------------------<")

// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

// 1. løsning
const average = (one + two + three)/3;
console.log(average.toFixed(5));

// 2. løsning
const average2= ((one + two + three)/3).toFixed(5);
console.log(average2);


console.log(">------------------------------Exercise 6-----------------------------------------<")

// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

// 1. løsning
// charAt er i String class. Hver gang man creater en String følger nogle metoder med
console.log(letters.charAt(2));

// 2. løsning
// (this works, because Strings are arrays of chars)
console.log(letters[2])

// 3. løsning
console.log(letters.substr(2, 1));


// --------------------------------------
console.log(">------------------------------Exercise 7-----------------------------------------<")

// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

//1. løsning
const factReplace = fact.replace("j", "J");
console.log(factReplace);

// 2. løsning
const javascriptCapitalized = fact.charAt(17).toUpperCase() + fact.slice(18);
const fact2 = fact.replace("javascript!", javascriptCapitalized);
console.log(fact2);

// --------------------------------------