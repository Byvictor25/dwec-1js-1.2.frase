'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	let palabrasFrase = cadena.split(' ');
	return palabrasFrase.length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	let palabrasFrase = cadena.split(' ');
	let cadenaMod = [];
	for (let palabra of palabrasFrase) {
		let palabraMayuscula = palabra.charAt(0).toLocaleUpperCase();
		cadenaMod.push(palabraMayuscula + palabra.substring(1));
	}
	let cadenaPrimeraMayuscula = cadenaMod.join(' ');
	return cadenaPrimeraMayuscula;
}

function letrasReves(cadena) {
	let cadenaReves = cadena.split('').reverse().join('');
	return cadenaReves;
}

function palabrasReves(cadena) {
	let cadenaSeparada = cadena.split(' ');
	let cadenaPalabrasReves = cadenaSeparada.reverse().join(' ');
	return cadenaPalabrasReves;
}

function palindromo(cadena) {
	let cadenaMinuscula = cadena.toLowerCase().split(' ').join('');
	let cadenaReversa = cadena.replace(/ /g, "").split('').reverse().join('').toLowerCase();
	return cadenaReversa === cadenaMinuscula;
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}