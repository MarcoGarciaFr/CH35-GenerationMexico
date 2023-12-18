/**

Ejercicio 1: un programa que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro.

*/

/*
let first = parseFloat(prompt("Ingresa el primer numero:"));
let second = parseFloat(prompt("Ingresa el segundo numero:"));

if (first === second) {
    console.log("Los numeros son iguales.");
} else if (first > second) {
    console.log("El primer numero es mayor que el segundo.");
} else {
    console.log("El segundo numero es mayor que el primero.");
}

*/

/*

Ejercicio 2: un programa que pida al usuarios dos palabras y determine si son iguales o no.

*/

/*

let primere = prompt("Ingresa la primera palabra:");
let segunde = prompt("Ingresa la segunda palabra:");

if (primere === segunde) {
    console.log("Las palabras son iguales.");
} else {
    console.log("Las palabras son diferentes.");
}

*/

// Ejercicio: Una funcion para hacer una receta de hotcakes, utilizar operadores logicos para saber si tengo los ingredientes. Que contenga operadores lógicos, de comparación, etc.

let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = true;
let tieneNutella = true;
let tieneLeche = true;


if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  alert("¡Puedes hacer Hotcakes!");
} else {
  alert("No puedes hacer Hotcakes. Necesitas todos los ingredientes.");
}


let siHay = false;
if (siHay == true) {
    alert("¡Genial! Tienes todos los ingredientes para hacer hotcakes.");
    alert("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
    alert("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
    alert("Hotcakes listos, ¡a disfrutar!");
  } else {
        alert("Tssss, t faltan ingredientes para hacer hotcakes.");
        alert("No es posible hacer hotcakes sin todos los ingredientes.");
        alert("Ve a conseguirlos, CORREEEE");
  }