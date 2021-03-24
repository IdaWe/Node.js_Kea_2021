const express = require("express");
const app = express();

app.use(express.static('public'));



console.log(__dirname)
app.get("/", (req, res) =>{ 
    res.sendFile(__dirname + "/public/index.html");     // __dirname exists in Node.js // dirname er en global variabel, res.sendFile is a method in Express
})

console.log(__dirname)
app.get("/nodejs", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/nodejs.html"); 
})

console.log(__dirname)
app.get("/restAPI", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/restAPI.html");     
})

console.log(__dirname)
app.get("/createServer", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/createServer.html");     
})

console.log(__dirname)
app.get("/gitHub", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/gitHub.html");     
})

console.log(__dirname)
app.get("/scopes", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/scopes.html");  
})

console.log(__dirname)
app.get("/visualStudioCode", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/visualStudioCode.html");  
})

console.log(__dirname)
app.get("/variables", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/variables.html");  
})

console.log(__dirname)
app.get("/functions", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/functions.html");  
})

console.log(__dirname)
app.get("/expresss", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/expresss.html");  
})

console.log(__dirname)
app.get("/datatyper", (req, res) =>{ 
    res.sendFile(__dirname + "/public/views/datatyper.html");  
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