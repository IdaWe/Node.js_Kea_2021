//"use strict"

// never EVER do this (disse to ting kan ikke lade sig gøre i strict mode)
// totalGlobalVariable = "My total global variable";
// console.log(totalGlobalVariable);

// let someVarToDelete = "dont hurt me";
// delete someVarToDelete;
// console.log(someVarToDelete);




// is a object truly immutable in Javascript? No!
const myObject = Object.freeze({
    attribute: "value"
});
myObject.attribute = "other value";
// console.log(myObject); retains the original value because of Object.freeze

let variableA;
let variableB;

// Forskellen på disse to:
console.log(variableA + variableB); // Thid method tries to concatenate or add the values
console.log(variableA, variableB); // This method that takes two parameters
// køre vi dette kan vi se at begge arguments i den sidste er undefined
// i den første prøver den at ligge de to undefined values sammen: NaN



// type coercion

// always compare both value and types with === and !==
// == allows tpe coercion to happen
// === hard equality check meaning that is checks if the type is the same and does not try to do type coercion
// hard equality check kaldes også strict equal 




// is a object truly immutable in Javascript? No!
/*const myObject = {
    attribute: "value"
};
myObject.attribute = "other value";
myObject["attribute"] = "other value";
console.log(myObject)*/


// Scope
console.log(">------------------------------Scope-----------------------------------------<")


{
    //this is a scope
}

function newScopeInside(){
    // here is a new scope
}

// --------------------------------------------------------------------

// what scope is this?? (this is a file level scope - the scope og the file)
{
    //this is a new scope
    let scopedVariable = "abc";
    {
        scopedVariable = 123; //not a new variable, just pointing to the other one and changing its value
        // this is a nested scope that inherits from the previous scope
    }
    console.log(scopedVariable); // printer 123, because it inherits so its the last change it prints

}

{
    let scopedVariable = "abc"; // this is in a new scope, so still prints 123
}


// --------------------------------------------------------------------

//variabler med samme navn kan godt deklareres flere gange, så længe de er i hvert sit scope:
{
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable); // printer 123 og pops 
    }
    console.log(scopedVariable);
}
// først printer den 123, så går den ud i ydre scope og så bliver variable i inner scope popped og så peger den sidste consolelog på abc og printer denne


// Brug ikke var overhovedet, her er et eksempel på hvorfor
for (var i = 0 ; i < 6 ; i ++) {
    setTimeout(() => {
        //code here that runs after 1 second
        console.log(i)
    }, 1000);
}
// Dette for loop printer 6 ud 6 gange - og det forentede vi ikke
// Vi forventede den udskrev fra 0, 1, 2, 3, 4, 5
// Ændre vi var til let udskriver den 0, 1, 2, 3, 4, 5
// Hvis let er brugt: Vi har et nested scope og det let gør er at den binder (i) til den korrekte
// variabel og i det indre scope har den den rigtige 'scoping'
// Så loopet her, med var increments (i) 6 gange før der er gået 1000ms
// Da vi havde var, kørte den igennem FØR de 1000ms var gået
// Med let: så er scoping ikke så global


// setTimeout executer instantly og printer/gør så hvad den skal efter den angivede tid
// Denne venter 3 sekunder og executer så noget kode
setTimeout(() => {
    //code here that runs after 3 second
}, 3000);

// --------------------------------------------------------------------

function someApplication(){
    let myFavoriteNumber = 43;
    const theirFavorite = whatsYourFavoriteNumber();
    return (myFavoriteNumber, theirFavoriteNumber);
}

// Hvis en anden også brugte navnet myFavoriteNumber til en variabel i programmet (fx 2), så ville den overwrite og
// printe 2, 2









