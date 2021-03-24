const express = require("express");
const app = express();

app.use(express.json());

// How do i respresent the anime_names collection?
// Asnwer -> An array of objects

// Implementering af methods fra design.txt


let animeNames = [ //let og ikke const da vi vil update array med post og delete
    {
        id: 1,
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
];

//--------------------------------------------------------------------
let AUTOINCREMENT = animeNames.length;
// autoincrement++

// GET all
app.get("/anime_names", (req, res) => {
    res.send ({ data: animeNames }) //hvad datatype sendes når man skriver (animeNames) -> et array (vi skal sende json, derfor skal der stå ({ animeNames }) )
});


// GET by id
app.get("/anime_names/:id", (req, res) => { //datatypen på id er String - fordi URL kan ikke være andet end String
    const animeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNameId);
    res.send ({ data: foundAnimeName })
});



//console.log(AUTOINCREMENT++);
//console.log(AUTOINCREMENT);

// POST
app.post("/anime_names", (req, res) =>{
    const newAnimeName = req.body;
    newAnimeName.id = ++AUTOINCREMENT;
    animeNames.push(newAnimeName); // <-- pusher nyt navn til nyt anime array
    res.send({data: newAnimeName})
});


/*
let monkey = {banana: "good"};
let krab = { epihany: "evolve to krab"};
console.log({ ...monkey, ...krab}); // <-- Spread
*/


const test0 = { good: "ok " };
const test1 = { good: "no " };
const test2 = { newValue: true };
console.log({ ...test0, ... test1, ...test2 })

// PATCH
app.patch("/anime_names/:id", (req, res) => {
    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)) {  //<-- statement der checker om id matcher
            return {  ...animeName, ...req.body, id: animeName.id };
        }
        return animeName;
    })
    res.send({ });
})




//DELETE
app.delete("/anime_names/:id", (req, res) =>{
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({ data: animeNames});
});


 



// ------------------------------------------

// app.listen takes a callback as the second argument which takes error as an
// argument. Implement the callback
app.listen(8080, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});

