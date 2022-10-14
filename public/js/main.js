var home = document.getElementById("home");
var pageAbout = document.querySelector(".page1");
var pageTech = document.querySelector(".page2");
var pageProject = document.querySelector(".page3");

var addSectionHome = document.getElementById("addSectionHome");
var deleteSection = document.querySelector(".homeFooter");

/* Adicionar secao Sobre e remover secao Home */
addSectionHome.addEventListener("click", function() {
    if (home.style.display = "none") {
        pageAbout.style.display = "none"
        home.style.display = "block"
    } 
})
deleteSection.addEventListener("click", function() {
    if (home.style.display = "none") {
        pageAbout.style.display = "block";
    } 
})

var addSectionAbout = document.getElementById("addSectionAbout");

/* Adicionar secao Tech e remover secao Sobre*/
addSectionAbout.addEventListener("click", function() {
    if (home.style.display = "none") {
        pageAbout.style.display = "block"
    } 
    console.log("teste")
})

var addSectionTech = document.getElementById("addSectionTech");

addSectionTech.addEventListener("click", function() {
    if (home.style.display = "none" && pageAbout.style.display == "block") {
        pageAbout.style.display = "none"
        pageTech.style.display = "block"
    } 
})

var addSectionProject = document.getElementById("addSectionProject");

addSectionProject.addEventListener("click", function() {
    if (home.style.display = "none" && pageAbout.style.display == "block") {
        pageAbout.style.display = "none"
        pageProject.style.display = "block"
    } 
})
