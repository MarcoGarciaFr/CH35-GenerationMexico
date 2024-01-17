// let harina = '2';
// let mlDeLeche = 250;
// let huevos = 2;
// let cucharadasMantequilla = 2;
// let nutella = 'Sí';

// let tazasDeHarina = parseInt(harina);
// console.log(tazasDeHarina);

// *De npumero a cadena*
let cantidadHarina = 200;
let cantidadHarinaStr = String(cantidadHarina);
document.write("Cantidad de harina: " + cantidadHarinaStr + " gramos" +"<br>");

// *De cadena a número*
let cantidadAzucarStr = "50";
let cantidadAzucar = Number(cantidadAzucarStr);
document.write("Cantidad de azúcar: " + cantidadAzucar + " gramos"+"<br>");

// *De booleano a cadena*
let tieneHuevos = true;
let tieneHuevosStr = String(tieneHuevos);
document.write("¿Tiene huevos? " + tieneHuevosStr+"<br>");

// *De cadena a booleano*
let tieneLecheStr = "true";
let tieneLeche = Boolean(tieneLecheStr);
document.write("¿Tiene leche? " + tieneLeche+"<br>");

// *De número a booleano*
let temperaturaSarten = 180;
let temperaturaSartenBool = Boolean(temperaturaSarten);
document.write("¿La sartén está caliente? " + temperaturaSartenBool+"<br>");

// *De booleano a número*
let requiereAceite = false;
let requiereAceiteNum = Number(requiereAceite);
document.write("¿Requiere aceite? " + requiereAceiteNum+"<br>");




// var instrucciones = [
//     "1. En un tazón grande, mezcla la harina, el azúcar, el polvo de hornear y la sal.",
//     "2. Agrega el huevo, la leche y la mantequilla.",
//     "3. Mezcla bien hasta obtener una masa suave.",
//     "4. Calienta un sartén a fuego medio.",
//     "5. Vierte un poco de masa en la sartén caliente para formar cada hotcake.",
//     "6. Cocina hasta que aparezcan burbujas en la superficie, luego voltea y cocina el otro lado hasta que esté dorado.",
//     "7. Repite el proceso hasta que cocines todos los hotcakes.",
//     "8. Sirve caliente con tu jarabe o frutas favoritas.",
//   ];

// console.log("\nInstrucciones:");
// for (var j = 0; j < instrucciones.length; j++) {
//   document.write(instrucciones[j]);
// }

// --------------------------------------------------------------------------------

/* 

// De número a cadena (string)
let cantidadHarina = 200; // Se declara una variable con valor numérico.
let cantidadHarinaStr = String(cantidadHarina); // Se convierte el número a cadena.
console.log("Cantidad de harina: " + cantidadHarinaStr + " gramos"); // Se imprime la cadena resultante.

// De cadena a número
let cantidadAzucarStr = "50"; // Se declara una variable con valor de cadena.
let cantidadAzucar = Number(cantidadAzucarStr); // Se convierte la cadena a número.
console.log("Cantidad de azúcar: " + cantidadAzucar + " gramos"); // Se imprime el número resultante.

// De booleano a cadena
let tieneHuevos = true; // Se declara una variable con valor booleano.
let tieneHuevosStr = String(tieneHuevos); // Se convierte el booleano a cadena.
console.log("¿Tiene huevos? " + tieneHuevosStr); // Se imprime la cadena resultante.
// De cadena a booleano
let tieneLecheStr = "true"; // Se declara una variable con valor de cadena.
let tieneLeche = Boolean(tieneLecheStr); // Se convierte la cadena a booleano.
console.log("¿Tiene leche? " + tieneLeche); // Se imprime el booleano resultante.

// De número a booleano
let temperaturaSarten = 180; // Se declara una variable con valor numérico.
let temperaturaSartenBool = Boolean(temperaturaSarten); // Se convierte el número a booleano.
console.log("¿La sartén está caliente? " + temperaturaSartenBool); // Se imprime el booleano resultante.

// De booleano a número
let requiereAceite = false; // Se declara una variable con valor booleano.
let requiereAceiteNum = Number(requiereAceite); // Se convierte el booleano a número.
console.log("¿Requiere aceite? " + requiereAceiteNum); // Se imprime el número resultante.

*/


/*
A ver, agrega lo siguiente al final de tu archivo:                         var instrucciones = [
  "1. En un tazón grande, mezcla la harina, el azúcar, el polvo de hornear y la sal.",
  "2. Agrega el huevo, la leche y la mantequilla.",
  "3. Mezcla bien hasta obtener una masa suave.",
  "4. Calienta un sartén a fuego medio.",
  "5. Vierte un poco de masa en la sartén caliente para formar cada hotcake.",
  "6. Cocina hasta que aparezcan burbujas en la superficie, luego voltea y cocina el otro lado hasta que esté dorado.",
  "7. Repite el proceso hasta que cocines todos los hotcakes.",
  "8. Sirve caliente con tu jarabe o frutas favoritas.",
];

console.log("\nInstrucciones:");
for (var j = 0; j < instrucciones.length; j++) {
console.log(instrucciones[j]);
}


document.write("<h2>Instrucciones:</h2>");
for (var j = 0; j < instrucciones.length; j++) {
  document.write(instrucciones[j] + "<br>");
}



----------------------------------------------------------------------------


// Se declara un array llamado 'instrucciones' que contiene cadenas de texto con pasos para hacer hotcakes.
var instrucciones = [
    "1. En un tazón grande, mezcla la harina, el azúcar, el polvo de hornear y la sal.",
    "2. Agrega el huevo, la leche y la mantequilla.",
    "3. Mezcla bien hasta obtener una masa suave.",
    "4. Calienta un sartén a fuego medio.",
    "5. Vierte un poco de masa en la sartén caliente para formar cada hotcake.",
    "6. Cocina hasta que aparezcan burbujas en la superficie, luego voltea y cocina el otro lado hasta que esté dorado.",
    "7. Repite el proceso hasta que cocines todos los hotcakes.",
    "8. Sirve caliente con tu jarabe o frutas favoritas.",
];
// Se imprime un encabezado para indicar que se mostrarán las instrucciones.
console.log("\nInstrucciones:");

// Se utiliza un bucle 'for' para iterar a través de cada elemento del array 'instrucciones'.
for (var j = 0; j < instrucciones.length; j++) {
  // Se imprime cada elemento del array, que representa un paso en las instrucciones.
  console.log(instrucciones[j]);
}


*/

// -------------------------------------------------------------------

//ESTE PROGRAMA LO HIZO CARLOS

/*
Este programa valida si una persona 
es baby boomer, generacion X, millenial o centenial
*/


/*
// Declaracion de variables
var nombre, edad, generacion;

// Función para determinar la generación
function determinarGeneracion(nombre, fecha_nacimiento) {
    // Validar que la edad sea un número positivo
    if (isNaN(fecha_nacimiento) || edad < 0) {
      return "Por favor, introduce una edad válida.";
    }
  
    // Determinar la generación
    if (fecha_nacimiento >= 1946 && fecha_nacimiento <= 1964) {
      generacion = "Baby Boomer";
    } else if (fecha_nacimiento >= 1965 && fecha_nacimiento <= 1980) {
      generacion = "Generación X";
    } else if (fecha_nacimiento >= 1981 && fecha_nacimiento <= 1996) {
      generacion = "Millennial";
    } else if (fecha_nacimiento >= 1997) {
      generacion = "Generación Z (Centennial)";
    } else {
      generacion = "No se puede determinar la generación para esta edad.";
    }
  
    // Devolver el resultado
    return Hola, ${nombre}, tu perteneces a la generación ${generacion}.;
  }
  

  var nombre = prompt("Introduce tu nombre: "); 
  var fecha_nacimiento = parseInt(prompt("Introduce tu fecha de nacimieno: "));
  var resultado = determinarGeneracion(nombre, fecha_nacimiento);
//   Imprime el resultado en la consola
  console.log(resultado);
*/