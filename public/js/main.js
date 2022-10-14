var home = document.getElementById("home");
var pageAbout = document.querySelector(".page1");
var pageTech = document.querySelector(".page2");
var pageProject = document.querySelector(".page3");
var pageContact = document.querySelector(".page4");

var addSectionHome = document.getElementById("addSectionHome");
var addSectionAbout = document.getElementById("addSectionAbout");
var addSectionTech = document.getElementById("addSectionTech");
var addSectionProject = document.getElementById("addSectionProject");
var addSectionContact = document.getElementById("addSectionContact");
var deleteSection = document.querySelector(".homeFooter");

/* Adicionar secao Sobre e remover secao Home */
addSectionHome.addEventListener("click", function() {
    if (home.style.display = "none") {
        pageAbout.style.display = "none"
        home.style.display = "block"
    } 
    console.log("Seção adicionada com sucesso")
})
deleteSection.addEventListener("click", function() {
    if (home.style.display = "none") {
        pageAbout.style.display = "block";
    } 
    console.log("Seção removida com sucesso")
})


/* Adicionar secao Tech e remover secao Sobre */
addSectionAbout.addEventListener("click", function() {
    if (home.style.display = "none" || pageAbout.style.display == "none") {
        pageAbout.style.display = "block"
        pageProject.style.display = "none"
        pageContact.style.display = "none"
        pageTech.style.display = "none"
    } 
})


addSectionTech.addEventListener("click", function() {
    if (pageAbout.style.display = "block" || pageTech.style.display == "none") {
        pageAbout.style.display = "none"
        pageProject.style.display = "none"
        pageContact.style.display = "none"
        pageTech.style.display = "block"
    } 
})


addSectionProject.addEventListener("click", function() {
    if (pageAbout.style.display == "block" || pageTech.style.display == "block" || pageContact.style.display == "block" ) {
        pageAbout.style.display = "none"
        pageTech.style.display = "none"
        pageContact.style.display = "none"
        pageProject.style.display = "block"
    } 
}) 



addSectionContact.addEventListener("click", function() {
    if (pageAbout.style.display == "block" || pageTech.style.display == "block" || pageProject.style.display == "block") {
        pageAbout.style.display = "none"
        pageTech.style.display = "none"
        pageProject.style.display = "none"
        pageContact.style.display = "block"
    } 
}) 