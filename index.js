1.
var n1 = prompt("Inserta un número");
var n2 = prompt("Inserta un número");
var n3 = prompt("Inserta un número");

var menor;

if (n1 <= n2 && n1 <= n3) {
    menor = n1;
} else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
} else {
    menor = n3
}

alert("El numero menor es:" + menor);


2.

var frase = prompt("Inserta una frase");
var letra = prompt("Inserta una letra");

var contador = 0;

for (let caracter of frase) {
    if (caracter === letra) {
        contador++;
    }
}

alert("La letra" + letra + "aparece" + contador + "veces");


3.

var n1 = parseFloat(prompt("Inserta el primer numero"));
var n2 = parseFloat(prompt("Inserta el segundo numero"));
var operacion = prompt("escribe 'sumar' o 'restar'");

var resultado;

if (operacion === "sumar") {
    resultado = n1 + n2;
} else if (operacion === "restar") {
    resultado = n1 - n2;
} else {
    alert("Operacion no valida");
}

if (resultado !== undefined) {
    alert("El resultado es:" + resultado);
}


4.

var usuarioCorrecto = "Slava";
var contraseñaCorrecta = "1234"

var intentos = 3;

while (intentos > 0) {
    var usuarioIngresado = prompt("Introduce usuario");
    var contraseñaIngresada = prompt("Introduce contraseña");

    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
        alert("Acceso concedido");
        break;
    } else {
        intentos--;
        alert("Usuario o contraseña incorrectos")
    }
}

if (intentos === 0) {
    alert("Acceso bloqueado");
}


5.

var letra = prompt("Inserta una letra");

if (letra === "a") {
    alert(7);
} else if (letra === "b") {
    alert(9);
} else if (letra === "c") {
    alert(101);
} else {
    alert("Te has equivocado");
}

6.

var palabras = ["manzana", "pera", "banana", "uva", "kiwi", "naranja", "mango"];

for (let i = 0; i < palabras.length - 1; i++) {
    for (let j = 0; j < palabras.length - 1 - i; j++) {

        if (palabras[j] > palabras[j + 1]) {

            var aux = palabras[j];
            palabras[j] = palabras[j + 1];
            palabras[j + 1] = aux;
        }
    }
}

consol.log(palabras);

7.

var letras = "";
const seguir = true;

while (seguir) {
    var letra = promt("letra:");
    letras = letras + letra.toLowerCase();
    seguir = confirm("quieres insertar otra letra?");
}


var letraBuscar = promt("que letra quieres contar?").toLowerCase();
var contador = 0;
var i = 0;

while (letras[i] !== undefined) {
    if (letras[i] === letraBuscar) {
        contador = contador + 1;
    }
    i = i + 1;
}

alert("la letra" + letraBuscar + "aparece" + contador + "veces");