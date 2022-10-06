/* const menu = document.querySelectorAll("li")
const ocultar = document.querySelector("#ocultar")
const exibir = document.querySelector("#exibir")
console.log(menu)
ocultar.addEventListener("click", function() {
    menu.style.display = "none"
    console.log(ocultar)
})

exibir.addEventListener("click", function() {
    menu.style.display = "block"
    console.log(exibir)
}) */

const navbar = () => {
    const menuResponsivo = document.querySelector(".menu-responsivo");
    const nav = document.querySelector(".flex");
    const navLinks = document.querySelectorAll(".flex li");

    menuResponsivo.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwars ${index / 7 + 0.5}s`;
            }
        });
        menuResponsivo.classList.toggle("toggle");
    });
};
navbar();