const express = require("express");
const app = express();



// Create a new server. That should contain routes that give you:
// The time
// The day
// The month


// --------------------------------- TIME ---------------------------------

 console.log(new Date().toLocaleTimeString("da-dk", {time: "long"}));

app.get("/time", (req, res) => {
    const currentTime = new Date().toLocaleTimeString("da-dk", {time: "long"});
    res.send({time: currentTime});
});

// --------------------------------- DAY ---------------------------------

const weekdays = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(new Date().toLocaleDateString("da-dk", {weekday: "long"}));

// hver gang client requester/kalder /day bliver callback inden i executed. 
// Callbacket bliver ikke executed når serveren startes - det er bare defineret
app.get("/day", (req, res) => {
    const currentWeekday = new Date().getDay();
    res.send({day: weekdays  [currentWeekday] }); //access weekdays by index and then giving it an index
});

// --------------------------------- MONTH ---------------------------------

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(new Date().toLocaleDateString("da-dk", {month: "long"}));

app.get("/month", (req, res) => {
    const currentMonth = new Date().getMonth();
    res.send({month: months [currentMonth] });
});

// ------------------------------------------------------------------------------------

// app.listen takes a callback as the second argument which takes error as an argument. Implement the callback
app.listen(8080, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});