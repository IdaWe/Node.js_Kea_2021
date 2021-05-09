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
    gitLink: href="https://github.com/anderslatif/Kea_DAT_Node_2021_SPRING.git/2/5._Nodefolio"
},{
    title: "Portfolio",
    description: "Personal portfolio implemented in Node.js",
    startDate: "Start dato: " + new Date("2021-04-08").toDateString(),
    endDate: "Slut dato: " + new Date("2021-04-15").toDateString(),
    gitLink: href="https://github.com/anderslatif/Kea_DAT_Node_2021_SPRING.git/2/5._Nodefolio"
}];
router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};