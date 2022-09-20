'use strict'

let fraseUsuario = prompt('Introduce una frase: ');

console.log(letras(fraseUsuario) + ' letras' + ' y ' + palabras(fraseUsuario) + ' palabras.');

console.log(maysc(fraseUsuario));

console.log(titulo(fraseUsuario));

console.log(letrasReves(fraseUsuario));

console.log(palabrasReves(fraseUsuario));

if(palindromo(fraseUsuario)) {
    console.log("Sí es palíndroma")
} else {
    console.log("No es palíndroma");
}
