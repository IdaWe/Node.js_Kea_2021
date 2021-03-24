// --------------------------------------
// Arrays, for loops
// --------------------------------------
console.log(">------------------------------Exercise 1----------------------------------------<")

// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 


// 1. løsning
console.log(letters[1]);

//2. løsning
var arrayLength = letters.length;
for (var i = 0; i < arrayLength; i++) {
    if (letters[i] == "b"){
        console.log(letters[i]);
    }
    
}


// --------------------------------------

console.log(">------------------------------Exercise 2----------------------------------------<")

// Exercise 2 - Array Positioning

const friends = [];
const friends2 = [];
const friends3 = [];


// What a lonely array. Add at least 3 friend objects to it.  

// 1. løsning - har her kun added Strings, altså ikke et object
friends.push("Neela", "Amidala", "Azmo", "Keeto", "Taya");
console.log(friends);

// 2. løsning
const Neela ={
    name: "Neela",
    age: 8,
    color: "Dark sable"
};

const Amidala ={
    name: "Amidala",
    age: 4,
    color: "chocolate"
};

friends2.push(Neela, Amidala);
console.log(friends2);


//3. løsning
friends3.push({name: "Neela", age: 8}, {name: "Amidala", age: 4})
console.log(friends3);


// --------------------------------------
console.log(">------------------------------Exercise 3----------------------------------------<")

// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

// 1. løsning
const index = significantMathNumbers.indexOf(1729); // returnere -1 hvis værdien ikke findes i array
console.log(index);


// --------------------------------------
console.log(">------------------------------Exercise 4----------------------------------------<")

// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

// 1. løsning
diet.splice(2, 0, "hamburger", "soda", "pizza");
console.log(diet);

// 2. 'løsning' som kun printer de slettede elementer, udstreget ellers virker diet ik
//const dietDeleted = diet.splice(1, 4);
//console.log(dietDeleted);


// --------------------------------------
console.log(">------------------------------Exercise 5----------------------------------------<")

// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

// 1. løsning
diet.pop();
console.log(diet)



// --------------------------------------
console.log(">------------------------------Exercise 6----------------------------------------<")

// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

// 1. løsning
const dinnerTray = [];
for (var i of diet) {
    dinnerTray.push(i);
}
console.log(dinnerTray);

// 2. løsning
const dinnerTray2 = diet.slice(); //kan ikke nøjes med = diet; da den ikke laver et nyt array, men referere til oprindeligt object
console.log(dinnerTray2)

// 3. løsning
const dinnerTray3 = [...diet]; // ... = spread operator, spreder elementerne ud - der SKAL være [... ]. de 3 dots tager elementerne ud af array'et og [] putter dem i et nyt array. Skriver vi [Splice] får vi et erray i et array
console.log(dinnerTray3)

// --------------------------------------
console.log(">------------------------------Exercise 7----------------------------------------<")

// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b


// 2. løsning
for (let i = 1; i < lettersExpanded.length; i = i + 2) {// eller i+=2
    console.log(lettersExpanded[i]);
}

// 2. løsning
let lettersLength = lettersExpanded.length;
for (let i = 1 ; i < lettersLength ; i++) {
    console.log(lettersExpanded[i]);
    i++
}




// --------------------------------------
console.log(">------------------------------Exercise 8----------------------------------------<")

// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];
const discardedNumbers2 = [];
const discardedNumbers3 = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers


// 1. løsning
let numbersLength = numbers.length;
for (let i = 0; i < numbersLength; i++) {
   if (numbers[i] < 0 || numbers[i] > 6){
    console.log(numbers[i]);
   } else {
    var toDiscard = numbers[i]
    discardedNumbers.push(toDiscard);
   }
}
console.log(discardedNumbers);


// 2. løsning - denne er god (filter?)
numbers.forEach((element) => {
    element < 0 || element > 6 ? console.log(element) : discardedNumbers2.push(element)
});


// 3. løsning
numbers.forEach((number) => {
    if (number < 0 || number > 6){
        console.log(number);   
    }
    else {
        discardedNumbers3.push(number);
    }
});
console.log(discardedNumbers);



// --------------------------------------