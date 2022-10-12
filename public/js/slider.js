var btnLink = document.querySelectorAll("#linksAnimation a");
console.log(btnLink)

const animacaoTexto = [
    {transform: 'translate(100%, 0)'},
    {transform: 'translate(0)'}
]
const animacaoDuracao = {
    duration: 2000
}


function clique() {
    btnLink.animate(animacaoTexto, animacaoDuracao);
    console.log("Botão clicado!");
}