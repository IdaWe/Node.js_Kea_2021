// We aim to use functional approaches when looping
// like map, filter, reduce, find etc.



const failures = ["misclick", "falling down", "skateboard accident", "tiktok fail"];
const failures2 = ["misclick", "falling down", "skateboard accident", "tiktok fail"];


// loop through this array using map and print out each element

//  1. løsning - multiliner
failures.map((failure, index) => { // giver den en lambda: =>
    console.log(failure, index); // vi console logger hver failure
});


// 1. løsning singleliner
failures2.map((failure, index) => console.log(failure, index));


// 2. løsning multiliner
const newfailures = failures.map((failure) => {
    return { failure, hilaritylevel: 5};
});

 failures[1] = "Charlie Chaplin fall";

console.log(newfailures);


// 2. løsning oneliner
// Fjern {} og ;
// Fordi der kun er et statement kan vi fjerne return keyword
// Har vi ikek return keyword returnere den undefined, fordi vi ikke returnere noget
// I det her tilfælde kan vi kun gøre dette - vi kan ikke constructe objects
// Så vi creater altså et nyt array og det array er ikke failures, men er mapped one to one
const newfailures2 = failures.map((failure) => failure); 
console.log(newfailures2);


