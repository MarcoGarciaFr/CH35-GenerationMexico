/*

*== Arrays ==
* Es una colección ó agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.
* los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.

*/

// * Crear un Array

const numeros = [1, 2, 3, 4, 5];

// * Array de cadena de texto

const comida = ["tacos", "sopita", "pan", "jugo"];

console.log(comida);

// * Array mixto

const mixto = [

    "Pluma",

    8,

    true,

    {nombre: "Mar"}

];

console.log(mixto);

// * Array vacio

const lista = []

console.log(lista);

// * Agregar elementos a mi array vacío

lista[0] = "Leche";
lista[1] = "Carne de pollo";
lista[2] = "Espinaca";
lista[3] = "Huevo";

console.log(lista);

// * Otra manera de crear Arrays

const frutas = new Array("Manzana", "Naranja", "Peras", "Mandarinas", "Uvas verdes");

/* 

*Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array .

*/

console.log(frutas);

// * Longitud de un array

console.log(frutas.length);

// * Acceder a los elementos del Array, acorde a su indice.

console.log(frutas[3]); // mandarinas

console.log(frutas[5]); // undefined

// * Modificar un elemento del array por el indice

const cremeria = ["Jamon", "Salchicha", "Queso adobera", "queso cotija", "Yogurt"];

console.log(cremeria);

// * cambiamos un elemento de queso a quesillo

cremeria[2] = "Quesillo";
cremeria[4] = "Danonino del grande";

console.log(cremeria);

// * Arreglo de arreglos o multidimencional

console.log("Arreglo de arreglos");

// *Estados: Estado de México, Guadalajara, Yucatan, Sonora, Oaxaca, CDMX.

// *Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos ¿?.

const estados = ["Estado de México", "Guadalajara", "Yucatan", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos ¿?"];

const menu = [estados, platillos];

console.log(menu[0][2]);

/*

En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

*/

// console.log(menu[0][0],menu[1][0]);

console.log(`El ${menu[1][0]} también se come ${menu[0][2]}`);

/*

* Metodos de Arrays

* Metodo de cola (queue). Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa el primer elemento añadido es el primer elemento eliminado.

* push

* shift

* unshift

* Metodo de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el ultimo elemento añadido es el primero en ser eliminado.

* push

* pop

*/

console.log("metodos de Arrays");

const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];

console.log(ch35);

// * pop() Eliminar el ultimo elemento del array

let popch35 = ch35.pop();

console.log(popch35) // devuelve el dato eliminado

console.log(ch35); // elimina el dato de la lista

// * push() Agregar al final del array

let pushch35 = ch35.push("Mony");

console.log(ch35);

// * shift() quitar primero del array

let shiftch35 = ch35.shift();

console.log(ch35);

// * unshift() agregar al principio del array

let unshiftch35 = ch35.unshift("Dany");

console.log(ch35);

// * reverse() cambia el sentido del ordenamiento del array

let reversech35 = ch35.reverse();

console.log(ch35);

/*

* Investigar:

* sort

* forEach

* slice

* splice

* indexOf

*/

