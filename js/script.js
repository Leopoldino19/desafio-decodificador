var textInput = document.querySelector("#input__texto");
var outInput = document.querySelector("#output")

function criptografar(){
    var texto = textInput.value;

    var resultcripto = texto.
    replace(/a/g, "ai"). 
    replace(/e/g, "enter").
    replace(/i/g, "imes").
    replace(/o/g, "ober").
    replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input__texto">' +  resultcripto
   + '</textarea>' + '<button class="btn__copiar" id="copiar" onclik="copiar()">Copiar</button>' 
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.
    replace(/ai/g, "a"). 
    replace(/enter/g, "e").
    replace(/imes/g, "i").
    replace(/ober/g, "o").
    replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input__texto">' +  resultDescripto
   + '</textarea>' + '<button class="btn__copiar" id="copiar" onclik="copiar()">Copiar</button>' 
}

function copiar() {
    var textoCop = document.getElementById('input__texto');

    textoCop.select();
    document.execCommand('Copiar')
    alert('Texto copiado');
}