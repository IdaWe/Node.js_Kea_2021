// fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getProjects() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectList = document.getElementById("projects");
        
        result.projects.map(project => {
            const projectDiv = document.createElement("div");
            

            const card = document.createElement("div");
            card.classList.add("card", "mx-auto", "my-2");
            card.style="width: 18rem;"

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = project.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = project.description;


    

            projectDiv.appendChild(card);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            projectList.appendChild(projectDiv);
            
        });


            } catch (error) {
                console.log(error);
            }
        })();
            /*
            const titleHeader = document.createElement("h2");
            titleHeader.classList.add("project-title");
            titleHeader.innerText = project.title;

            const descriptionP = document.createElement("p");
            descriptionP.classList.add("project-description");
            descriptionP.innerText = project.description;

            const startDateP = document.createElement("p");
            startDateP.classList.add("project-startDate");
            startDateP.innerText = project.startDate;

            const endDateP = document.createElement("p");
            endDateP.classList.add("project-endDate");
            endDateP.innerText = project.endDate;

            const gitLinkP = document.createElement("a");
            gitLinkP.classList.add("project-gitLink");
            gitLinkP.innerText = project.gitLink;
*/
            



            /*
            projectDiv.appendChild(titleHeader);
            projectDiv.appendChild(descriptionP);
            projectDiv.appendChild(startDateP);
            projectDiv.appendChild(endDateP);
            projectDiv.appendChild(gitLinkP);
*/


        


        /* 
        show the result on the page...  
        do it in a scalable way that works even if you add new projects 
        */




// fetch("/api/projects").then(res => res.json()).then(console.log);


