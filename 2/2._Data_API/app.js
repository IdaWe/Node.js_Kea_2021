const express = require("express");
const app = express();

app.use(express.json());


//-----------------------------------------
// Reading from json file: wine.json
// Vi kan bruge require keyword. Vi kan dog ikke skrive til json med require

const wine = require("./wine.json"); // har givet den path til filen

// Create a route called serve
app.get("/serve", (req, res) => {
    console.log(wine);
    res.send({ wine });
});

//---------------------------------------


// This is not a code question
// How do you send data with a GET request?
    //Inside of URL parameters - se noter for mere



// Create a route called search that returns an empty JSON
// Vi vil gerne create en query string
// Med denne modtager vi bare {} i browseren
/*
app.get("/search", (req, res) => {
    console.log(); // req.query er af datatypen js object
    res.send({ query: req.query });
});*/


// Now send back the entire query string
app.get("/search", (req, res) => {
    console.log(req.query); // req.query er af datatypen js object
    res.send({ searchquery: req.query});
});

// ------------------------------------------

// Create a route called telegram
// Path variables
// Vi kan definere en parameter ved at definere noget med : og det signalere det er dynamisk content dynamisk content
app.get("/telegram/:message", (req, res) => {
    console.log(req.params)
    res.send({ message: req.params.message });
});

// Create another path variable called name and send back "name, {message}""
app.get("/telegram2/:message/:name/:hardcodedvalue", (req, res) => { // <--- her er 2 path variables: message og name
    const message = req.params.name + ", " + req.params.message;
    res.send({ message: message});
    //console.log(req.params)
    //res.send({ message: req.params.message, name: req.params.name});
});
// skriv i browser: http://www.localhost:8080/telegram2/beep%20beeeeeeep%20bep/Lancelot

// ------------------------------------------

// POST
app.post("/goodstuff", (req, res) => {
    console.log(req.body)
    res.send({ body: req.body })
})
//Hvorfor er det ovenover undefined

// ------------------------------------------

// app.listen takes a callback as the second argument which takes error as an
// argument. Implement the callback
app.listen(8080, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});

