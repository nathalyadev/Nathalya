var listProjects = document.getElementById("myListProject");

var project1 = {
    name: "Tic Tac Toe",
    img: "./assets/pictures/Tic-Tac-Toe.png",
    topics: {
        level: "simples",
        mainLanguage: "Javascript",
        styleLanguage: "CSS",
        markupLanguage: "HTML"
    },
    link: "https://nathgit198.github.io/Tic-Tac-Toe/",
}

var project2 = {
    name: "To Do List",
    img: "https://user-images.githubusercontent.com/83317033/151626585-aff00bcf-acaf-404d-a137-d890d06a8e2e.png",
    topics: {
        level: "simples",
        mainLanguage: "Javascript",
        styleLanguage: "CSS",
        markupLanguage: "HTML"
    },
    link: "https://github.com/Nathgit198/To-Do-List",
}


var projects = [project1, project2]

function getProject() {
    var liProject = document.createElement("li");
    liProject.className = "projectsList";
    listProjects.appendChild(liProject);

    for (var i = 0; i < projects.length; i++) {
        liProject.innerHTML += 
            "<h4 class='nameProject'>" + projects[i].name + "</h4>" +
            "<section class='project'>" + 
            "<img id='showSection' src='" + projects[i].img + "'>" +
                "<section class='informationsProjects'>" +
                    "<section class='projectContainer'>" +
                        "<section class='topics'>" +
                            "<p class='topic'>" + projects[i].topics.level + "</p>" +
                            "<p class='topic'>" + projects[i].topics.mainLanguage + "</p>" +
                            "<p class='topic'>" + projects[i].topics.markupLanguage + "</p>" +
                            "<p class='topic'>" + projects[i].topics.styleLanguage + "</p>" +
                        "</section>" +
                        "<a target='_blank' href='" + projects[i].link + "'>" +
                            "<button>Acessar</button>"
                        "</a>"
                    "</section>" +
                "</section>" +
            "</section>"    
    }
}

getProject();