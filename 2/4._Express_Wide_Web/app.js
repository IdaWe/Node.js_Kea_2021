const express = require("express");
const app = express();



// Todo serve the welcome page on root
console.log(__dirname)
app.get("/", (req, res) =>{ 
    res.sendFile(__dirname + "/public/welcome.html");     // __dirname exists in Node.js // dirname er en global variabel, res.sendFile is a method in Express
})

// Andet endpoint
//console.log(__dirname)
app.get("/burger", (req, res) =>{ 
    res.sendFile(__dirname + "/public/burger.html");     // __dirname exists in Node.js // dirname er en global variabel, res.sendFile is a method in Express
})

// ------------------------------------------

// Create a new page relating to pizza and serve it
app.get("/pizza", (req, res) =>{ 
    res.sendFile(__dirname + "/public/pizza.html");
})


// ------------ Serverside redirection with express----------------------

app.get("/whiskey", (req, res) => { 
    res.send({ barkeep: "Here ya go, pal. A whiskey for you" });
});


app.get("/pub", (req, res) => { 
    if (Number(req.query.money) > 500) {
        res.redirect("/whiskey");
    } else{
        res.send({ doorman: "Sorry, you don't have enough money for whiskey"});
    }
    // metoden ovenover redirecter hvis man skriver dette i url: http://www.localhost:3000/pub?money=501


    // res.redirect("/whiskey"); // <-- redirectionmetode kaldes som sender en til app.get(/"whiskey"...
});




// ------------------------------------------




const port = process.env.PORT || 8080;

console.log(port);
// app.listen takes a callback as the second argument which takes error as an
// argument. Implement the callback
app.listen(port, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});
