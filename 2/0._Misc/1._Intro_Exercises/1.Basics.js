// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------

console.log(">------------------------------Exercise 1-----------------------------------------<")
// Exercise 1 - Console and constants
// show in the console
// My first name is Ida and my last name is Wendel

const firstName = "Ida";
const lastName = "We";

// Printer bare hver for sig
console.log("My first name is " + firstName);
console.log("My last name is " + lastName);

// concatenation
console.log("My first name is " + firstName + " and my last name is " + lastName);

// string literal - husk skal være et ` , ' og " virker ikke.
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// Kan også laves med komma
console.log("My first name is", firstName, "and my last name is", lastName)



console.log(">------------------------------Exercise 2-----------------------------------------<")
// --------------------------------------
// Exercise 2 - Numbers and Strings
// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

const year = "2020";
const number = 1;

// Husk skal være et + foran ellers printer den bare: 20201. Det er den kort emåde at skrive parse to a number
console.log(+ year + number);


// Løsning ved at lave en variabel og printe den
const currentYear = (+ year + number);
console.log(currentYear);

// En 2. løsning
console.log (+ year + number);


// Typecaster year til et number og ligger så bare variablen 'number' til 
console.log(parseInt(year) + number);


// Løsning ved brug af Number. Næsten det samme som parseInt (se noter for forskellen)
console.log(Number(year) + number);


// --------------------------------------