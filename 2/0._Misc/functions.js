// create a function call myFirstFunction which returns a greeting

// 1 ------------------------------------------------
let greeting = "Greetings my friends"
function myFirstFunction() {
    return console.log(greeting);
}
myFirstFunction();


// 2 (hoisting)
const returnValue = myFirstFunction2();
console.log(myFirstFunction2());

function myFirstFunction2() { // function declaration (er hoistet)
    return "Greetings my friends";
}

// eks. lige ovenover her i //2
// hoisting / to hoist (feature i javascript) = to lift it up (funktionen bliver løftet op)
// hoisting = når man deklerere en function bliver den hoistet.
// Hele filen bliver gennemgået og løfter alle functions declarations op til
//memoryspace i starten så de kan kaldes fra alle steder i filen


// 3 - anonymous function ------------------------------------------------
const myVariableFunction = function() { //variabel (function gemt i en variabel, er ikke hoistet)
    console.log("Hello from the anonymous function");
};

myVariableFunction();




// Arrow function (og anonymous) ------------------------------------------------
 const myArrowFunction = (yes) => {
    console.log("Hello from the anonymous function which is also an arrow function");
 }

 myArrowFunction();



 //callback functions ------------------------------------------------
function sayHiLater(anyFunctionReference){
    //evt. andet kode her
    anyFunctionReference();
}

// call sayHiLater and pass a callback that says "Hi"
const hi = () => { // arrow function der console logger hi
    console.log("Hi"); 
}
sayHiLater(hi);

// do the same but this time it should say "Hello"
const hello = () => { 
    console.log("Hello"); 
}
sayHiLater(hello);




// ----------------------------------

function interact(genericInteraction, name){ // genericInteraction = en function
    console.log(genericInteraction(name));

}

// call interact and let it interact with a person of name
// example: "poke " + name
const poke = (name) => {
    return "Poke " + name;
}

interact(poke, "Neela");



// call interact and in a single line make sure the following is achieved
// example: "lick" + name
interact((name) => "Lick " + name, "Neela"); //lambda
interact(name => "Lick " + name, "Azmo"); //lambda

// ----------------------------------