var listProjects = document.getElementById("myListProject");

var project1 = {
    name: "Tic Tac Toe",
    img: "./assets/pictures/Tic-Tac-Toe.png",
    description: "Projeto simples Jogo da velha",
    topics: {
        level: "simples",
        mainLanguage: "Javascript",
        styleLanguage: "CSS",
        markupLanguage: "HTML"
    },
    link: "https://nathalyadev.github.io/Tic-Tac-Toe/",
}

var project2 = {
    name: "To Do List",
    img: "https://user-images.githubusercontent.com/83317033/151626585-aff00bcf-acaf-404d-a137-d890d06a8e2e.png",
    description: "Lista de tarefas utilizando javascript",
    topics: {
        level: "simples",
        mainLanguage: "Javascript",
        styleLanguage: "CSS",
        markupLanguage: "HTML"
    },
    link: "https://github.com/nathalyadev/To-Do-List",
}

var project3 = {
    name: "Landing Page - MyPizza",
    img: "https://github.com/nathalyadev/mypizza/blob/main/src/assets/screenshotPage.png?raw=true",
    topics: {
        level: "intermediário",
        mainLanguage: "VueJS",
        styleLanguage: "CSS",
        markupLanguage: "HTML"
    },
    link: "https://github.com/nathalyadev/mypizza",
}


var projects = [project1, project2]

function getProject() {
    for (var i = 0; i < projects.length; i++) {
        listProjects.innerHTML += 
        "<li class='projectsList'>" +
            "<h4 class='nameProject'>" + projects[i].name + "</h4>" +
            "<section class='project'>" + 
                "<section class='imgProject'>" +
                    "<img class='imageProject' src='" + projects[i].img + "'>" +
                    "<a class='btnAccess' target='_blank' href='" + projects[i].link + "'>" +
                        "<button>Acessar</button>"          +  
                    "</a>" +
                "</section>" +
                "<section class='informationsProjects'>" +
                    "<section class='projectContainer'>" +
                        "<section class='descriptionProject'>" +
                            "<p>" + projects[i].description + "</p>" +
                        "</section>" +
                        "<section class='topics'>" +
                            "<p class='topic'>" + projects[i].topics.level + "</p>" +
                            "<p class='topic'>" + projects[i].topics.mainLanguage + "</p>" +
                            "<p class='topic'>" + projects[i].topics.markupLanguage + "</p>" +
                            "<p class='topic'>" + projects[i].topics.styleLanguage + "</p>" +
                        "</section>" +
                    "</section>" +
                "</section>" +
            "</section>"    +
        "</li>"
    }
}

getProject();