const express = require("express");
const app = express();
// To ovenstående kan også skrives: const app = require(express)();


// --------------------------------------------------------


// send back empty json
app.get("/", (req, res) => {// <- end point der tager to arguments: end point og et callback, som også tager to arguments: request som kommer ind og responsen den vil sende ud
    
    // send an empty json as response (husk {} ellers er det ikke json):
    res.send({});
});
// hele det ovenstående op til //GET er et statement


// --------------------------------------------------------


// Create a route on the endpoint me which sends back a json that represents you
app.get("/me", (req, res) => {
    const me = {
        name: "Ida",
        lastname: "Wendel",
        city: "Copenhagen"
    }
    res.send(me);
});


// --------------------------------------------------------
// TIME ASSIGNMENT

//GET DATE 1 solution
/*const weekdays = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(new Date().toLocaleDateString("da-dk", {weekday: "long"}));

app.get("/day", (req, res) => {
    const currentWeekday = new Date().getDay();
    res.send({});
});*/

//can aslo be solved like this:


// variablen herunder (weekdays) bliver executed en gang ved start op / on startup.variablen bliver altså kun kaldt en gang
// Så den bliver kaldt når serveren starter - arrayet bliver defineret 1 gang og alt omkring det køre når vi starter serveren
// den creater arrayet og lagre det i memory
// lagde vi arrayeet ind i metoden app.get så ville et nyt array skulle laves
// hver gang app.get metoden blev kaldt. derfor smart at ligge den udenfor (vi har optimeret koden)
// så lægne det er noget der ikke skal ændres er det godt at gøre
const weekdays = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(new Date().toLocaleDateString("da-dk", {weekday: "long"}));

// hver gang client calls /day bliver callbakcet inden i executed. 
// Callbacket bliver ikke executed når serveren startes - det er bare defineret
app.get("/day", (req, res) => {
    const currentWeekday = new Date().getDay();
    res.send({day: weekdays [currentWeekday] }); //access weekdays by index and then giving it an index
});

// --------------------------------------------------------

// create a route called about that serves a hardcoded api version number in a string
app.get("/about", (req, res) => {
    res.send({
        version: "1.0.1"});
});

// Magen til den lige ovenover, sender bare json i stedet (sendes som String)
/*app.get("/about2", (req, res) => {
    res.json({
        version: "1.0.1"});
});*/


// send kan også tage nogle andre ting med (modsat json)
app.get("/about2", (res, req) => {
    res.json({
        version: "1.0.1"});
});


// Try to send a header tag that says welcome in page
// vi vil ikke bruge denne måde med at sende en string, var bare for at vise vi kan
app.get("/page", (req, res) => {
    res.send("<h1> Welcome </h1>");
});





app.listen(8080);




