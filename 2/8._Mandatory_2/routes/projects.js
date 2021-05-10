const router = require("express").Router();

/*
    Project Schema
        Title - (string)
        Description: (string)
        StartDate: (date)
        EndDate: (date)
        Language(s): (array)
        Tech used: (array)
        Image: (string)
        HostedLink: (string)
        GitLink: (string)
*/

/* On the projects page fetch all the projects from the route below */


const projects = [{
    title: "Portfolio",
    description: "Personal portfolio implemented in Node.js",
    startDate: "Start dato: " + new Date("2021-04-08").toDateString(),
    endDate: "Slut dato: " + new Date("2021-04-15").toDateString(),
    gitLink: href="https://github.com/IdaWe/Node.js_Kea_2021/tree/main/2/8._Mandatory_2",
    cardPicture: src="/projects/img/portfolio1.png"
},{
    title: "Projekt 2",
    description: "Projekt prokjekt",
    startDate: "Start dato: " + new Date("2021-12-08").toDateString(),
    endDate: "Slut dato: " + new Date("2021-04-15").toDateString(),
    gitLink: href="https://github.com/blabla/3/_34",
    cardPicture: src="/frontpage/img/Azmo.jpg"
}]

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};