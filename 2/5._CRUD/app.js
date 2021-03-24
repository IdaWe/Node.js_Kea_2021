const express = require("express");
const app = express();

app.use(express.json());

let ferretList = [ //let og ikke const da vi vil update array med post og delete
    {
        id: 1,
        name: "Neela",
        age: "8",
        color: "Dark sable"
    },
    {
        id: 2,
        name: "Amidala",
        age: "4",
        color: "Chocolate"
    },
    {
        id: 3,
        name: "Keeto",
        age: "5",
        color: "Dark sable"
    }
];


let AUTOINCREMENT = ferretList.length;

// --------------------------------- GET ---------------------------------

// GET ALL
app.get("/ferret", (req, res) => {
    res.send ({ info: ferretList }) //hvad datatype sendes når man skriver (ferrets) -> et array (vi skal sende json, derfor skal der stå ({ ferrets }) )
});

// GET BY ID
app.get("/ferret/:id", (req, res) => { //datatypen på id er String - fordi URL kan ikke være andet end String
    const getFerretId = Number(req.params.id);
    const foundFerret = ferretList.find(foundFerret => foundFerret.id === getFerretId);
    res.send ({ data: foundFerret })
});
app.get("/anime_names/:id", (req, res) => { //datatypen på id er String - fordi URL kan ikke være andet end String
    const animeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeNameId);
    res.send ({ data: foundAnimeName })
});

// --------------------------------- POST ---------------------------------

app.post("/ferret", (req, res) =>{
    const newFerret = req.body;
    newFerret.id = ++AUTOINCREMENT;
    ferretList.push(newFerret); // <-- pusher ny ilder til nyt ferret array
    res.send({info: newFerret})
});

// --------------------------------- PATCH ---------------------------------

app.patch("/ferret/:id", (req, res) => {
    ferretList = ferretList.map(ferretToUpdate => {
        if (ferretToUpdate.id === Number(req.params.id)) {  //<-- statement der checker om id matcher
            return {  ...ferretToUpdate, ...req.body, id: ferretToUpdate.id };
        }
        return ferretToUpdate;
    })
    res.send({ });
})


// --------------------------------- DELETE ---------------------------------

app.delete("/ferret/:id", (req, res) =>{
    ferretList = ferretList.filter(ferret => ferret.id !== Number(req.params.id));
    res.send({ info: ferretList});
});


// ------------------------------------------------------------------------------------

// app.listen takes a callback as the second argument which takes error as an argument. Implement the callback
app.listen(8080, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});


