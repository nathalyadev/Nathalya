/* Adicionar e remover secao */
var addSection = document.querySelector(".addSection");

addSection.addEventListener("click", function() {
    var home = document.getElementById("home");
    home.style.display = "block";
})


var deleteSection = document.querySelector(".homeFooter");

deleteSection.addEventListener("click", function() {
    var home = document.getElementById("home");
    home.style.display = "none";    
})