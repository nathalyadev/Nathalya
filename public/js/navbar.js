var home = document.getElementById("home");

function navbar() {
    var nav;
    nav.innerHTML = 
        '<nav>' +
            '<ul>' +
                '<li><a href="">Home</a></li>' +
                '<li><a href="">Sobre mim</a></li>' +
                '<li><a href="">Tecnologias</a></li>' +
                '<li><a href="">Projetos</a></li>' +
                '<li><a href="">Contato</a></li>' +
            '</ul>' +
        '</nav>'
    home
}

function navbarResponsive(responsive) {
    if (responsive.matches) {

    } else {

    }
}

var responsive = window.matchMedia("(min-width: 768px)")
navbarResponsive(responsive)
responsive.addListener(navbarResponsive);