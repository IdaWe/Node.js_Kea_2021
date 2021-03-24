const express = require("express");
const app = express();

app.use(express.static('public'));


// Todo serve the welcome page on root
console.log(__dirname)
app.get("/", (req, res) =>{ 
    res.sendFile(__dirname + "/public/index.html");     // __dirname exists in Node.js // dirname er en global variabel, res.sendFile is a method in Express
})

console.log(__dirname)
app.get("/nodejs", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/nodejs.html");     // __dirname exists in Node.js // dirname er en global variabel, res.sendFile is a method in Express
})




// ------------------------------------------

// app.listen takes a callback as the second argument which takes error as an
// argument. Implement the callback
app.listen(8080, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});