/* Adicionar e remover secao */
var addSection = document.querySelector(".addSection");
addSection.addEventListener("click", function() {
    var home = document.getElementById("home");
    var page1 = document.querySelector(".page1");
    if (home.style.display = "block") {
        page1.style.display = "none";
    } 
})

var deleteSection = document.querySelector(".homeFooter");
deleteSection.addEventListener("click", function() {
    var home = document.getElementById("home");
    var page1 = document.querySelector(".page1");
    if (home.style.display = "none") {
        page1.style.display = "block";
    } 
})