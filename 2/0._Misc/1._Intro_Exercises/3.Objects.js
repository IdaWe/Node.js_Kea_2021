// --------------------------------------
// Objects
// --------------------------------------

console.log(">------------------------------Exercise 1----------------------------------------<")
// Exercise 1 - Retrieve value from object by key

// 1. løsning - printer hele objectet?
const myObj = {"message": "Hello, earthling! I bring peace."};
console.log(myObj);

// 2. løsning - printer selve String message
// sådan accesser man en value i et object
// Vi bruger square bracket notation, så vi accesser her key gennem square brackets
console.log(myObj["message"]);

// 3. løsning - printer selve String message
// Sådan accesser man en value i et object
// Her bruges dot notation. Dette er måden der foretrækkes i js, fordi det er
//nemmere med et enkelt . eller hvis man fx har innervalues er det bare nemmere at skrive
console.log(myObj.message);

// Log the message 

// --------------------------------------
console.log(">------------------------------Exercise 2----------------------------------------<")
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const ferret = {name:"Neela", age: 8};
console.log(ferret);

// --------------------------------------
console.log(">------------------------------Exercise 3----------------------------------------<")
// Exercise 3 - Add a property 
// make a rule called isAllowed and let the value be true
const stackOverflow = {};

// 1. løsning
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed);

// 2. løsning
stackOverflow["isAllowed"]=true;
console.log(stackOverflow);

// --------------------------------------
console.log(">------------------------------Exercise 4----------------------------------------<")
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// 1. løsning
delete thisSong.description; // dette gør den empty (ikke undefined), da det er en const). Det er et empty JSON, ikke et empty array
thisSong.about = ("Just a tribute");
console.log(thisSong);
console.log(thisSong.about);

// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


