var closeBtn = document.querySelector(".closeBtn");
var ocult = document.querySelector(".informationsProjects");

closeBtn.addEventListener("click", function() {
    ocult.style.display = "none";
})

var showSection = document.getElementById("showSection");

showSection.addEventListener("click", function() {
    ocult.style.display = "block";

})

/* Texto passando na tela */
var recebeTexto = document.getElementById("sliderText")
var texto = ['Olá meu nome é Nathálya', 'Em busca de oportunidade', 'Desenvolvedora Front-end'];

function escreverTexto(str, done) {
    var letras = str.split('').reverse();
    var tipo = setInterval(function() {
        if (!letras.length) {
            clearInterval(tipo);
            return setTimeout(done, 500)
        }
        var proximo = letras.pop();
        recebeTexto.innerHTML += proximo;
    }, 100);
}

function limpar(done) {
    var letras = recebeTexto.innerHTML;
    var numero = letras.length;
    var tipo = setInterval(function() {
        if (numero-- == 0) {
            clearInterval(tipo);
            return done();
        }
        recebeTexto.innerHTML = letras.slice(0, numero);
    }, 100);
}
function rodape(conteudos, el) {
    var atual = -1;
	function prox(cb){
		if (atual < conteudos.length - 1) atual++;
		else atual = 0;
		var str = conteudos[atual];
		escreverTexto(str, function(){
			limpar(prox);
		});
	}
	prox(prox);
}
rodape(texto);
/* Fim Texto passando na tela */

