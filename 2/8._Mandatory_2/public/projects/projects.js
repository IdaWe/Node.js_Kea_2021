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

            const cardPicture = document.createElement("div");
            card.classList.add("cardPicture");
            card.style="width: 18rem;"

            const cardBody = document.createElement("div");     
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = project.title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = project.description;

            const cardStartDate = document.createElement("p");
            cardStartDate.classList.add("card-startDate");
            cardStartDate.innerText = project.startDate;

            const cardSlutDate = document.createElement("p");
            cardSlutDate.classList.add("card-endDate");
            cardSlutDate.innerText = project.endDate;

            const gitLink = document.createElement("p");
            gitLink.classList.add("card-gitLink");
            gitLink.innerText = project.gitLink;

            projectDiv.appendChild(card);
            projectDiv.appendChild(cardPicture);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardStartDate);
            cardBody.appendChild(cardSlutDate);
            cardBody.appendChild(gitLink);

            projectList.appendChild(projectDiv);


            
        });


            } catch (error) {
                console.log(error);
            }
        })();


// fetch("/api/projects").then(res => res.json()).then(console.log);


