const express = require("express");
require('dotenv').config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");

app.use(projectsRouter.router);
app.use(contactRouter.router);

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const skillspage = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");
const educationpage = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");
const recommendationspage = fs.readFileSync(__dirname + "/public/recommendations/recommendations.html", "utf-8");


app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skillspage + footer);
});

app.get("/recommendations", (req, res) => {
    res.send(header + recommendationspage + footer);
});

app.get("/education", (req, res) => {
    res.send(header + educationpage + footer);
});








//-----------------------------------------------

app.listen(8080, (error) => { // error er af datatypen object
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});