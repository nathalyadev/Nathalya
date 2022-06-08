/* Exibir e ocultar menu */
function menu() {
    var menuLua = document.querySelector('.darkmodeTheme');

    if (menuLua.style.display === 'none') {
        menuLua.style.display = 'block'
    } else {
        menuLua.style.display = 'none'
    }
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


/* Dark mode e light mode */
const html = document.querySelector("html");
const checkbox = document.getElementById('checkbox');

const getStyle = (element, style) => 
  window.getComputedStyle(element)
  .getPropertyValue(style);

const lightmode = {
    backgroundColor: getStyle(html, "--background-color"),
    colorMain: getStyle(html, "--color-main"),
    white: getStyle(html, "--white"),
    black: getStyle(html, "--black"),
    headerColor: getStyle(html, "--header-color"),
    transparent: getStyle(html, "--transparent"),
    colorForm: getStyle(html, "--color-form"),
    btnDarkmode: getStyle(html, "--btn-darkmode"),
/*     colorIcons: getStyle(html, "--color-icons"), */

    headerText: getStyle(html, "--header-text"),
    colorProjects: getStyle(html, "--color-projects"),
    textForm: getStyle(html, "--text-form")
}

const darkmode = {
    backgroundColor: '#151515',
    colorMain: '#1f1f1f',
    black: '#fff',
    headerColor: '#0D0D0D',
    transparent: '#333333',
    colorForm: '#0D0D0D',
    btnDarkmode: '#333333',
/*     colorIcons: '#fff', */
    
    headerText: '#fff',
    colorProjects: '#0D0D0D',
    textForm: '#fff',

}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener('change', ({target}) => {
  target.checked ? changeColors(darkmode) : changeColors(lightmode)
});

