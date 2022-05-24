/* Exibir e ocultar menu */
function exibirMenu() {
    document.querySelector(".menu").style.display = "block";
}
function ocultarMenu() {
    document.querySelector(".menu").style.display = "none";
}

/* Escrever texto */
var recebeTexto = document.getElementById("escrever")
var texto = ['Olá meu nome é Nathálya', 'Em busca de oportunidade'];

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

/*  
const container = document.querySelectorAll('.minhas-informacoes section');
container.forEach(element => element.addEventListener('click', () => exibirConteudo(element)))

const exibirConteudo = (e) => {
    const conteudo = e.childNodes[3]
    conteudo.classList.toggle('block')
}*/

