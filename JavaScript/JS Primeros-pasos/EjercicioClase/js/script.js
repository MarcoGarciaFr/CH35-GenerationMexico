// comentarios de una sola linea

/* comentarios
multilinea */

//alert("Hola mundo");

//console.log("Este es un mensaje para mi consola");

/* var nombre = prompt("Ingresa tu nombre");

alert("Hola, " + nombre + " vengo del futuro"); */

//Bienvenido a la CH35

/*  var numero1 = parseInt(prompt("Ingresa el primer numero: "));

var numero2 = parseInt(prompt("Ingresa el segundo numero: "));

console.log("suma: " + (numero1 + numero2));

console.log("resta: " + (numero1 - numero2));

console.log("multiplicación: " + (numero1 * numero2));

console.log("división: " + (numero1 / numero2)); */

/*

var nombre = prompt("Ingresa tu nombre");

var edad = parseInt(prompt("Ingresa tu edad"));

if ( edad < 17 ){

    alert(nombre + ". Tas chavo, chavo");
}
else{
    alert(nombre + ". Ya te sabes la de chambear");
}

*/

// TIPOS DE DATOS Y VARIABLES //

/* 

scope es el alcance de nuestras variables

var, let, const la diferencia es el alcance

var: tiene un alcance global
let: tiene un alcance local
const: se mantiene sin ningun cambio

string: cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido

*/


/* Todas nuestras variables deben ser declaradas con nombres especificos y claros, sin espacios, no debebn iniciar con numeros */


/*

let nombre = "Daniel";

let invitadxsExtras = 2;

let esMayorEdad = true;

let edad = 24;

let invitadxEspecial = null;

let horaDeSalida = undefined;

document.write(nombre); // escribe el nombre en página

// console.log(nombre);

*/

/* 

Encasillamiento o tipado nos es util para el mantenimiento del código ya que lo hace mas legible y facil de entender, además nos ayuda a la prevención de errores para reducir la probabilidad de los mismos, mejora el rendimiento de nuestro programa.

*/

/*

let numero = 15;

let texto = "hola";

// con encasillamiento

let numeroEncasillado = Number = 15;

let textoEncasillado = String = "hola";

*/

//typeof palabra reservada para saber que tipo de dato tenemos...

/*

console.log(typeof(nombre));

conversión de string a number...

let funcionNumber = console.log(typeof Number (nombre));

metodoParseInt = console.log(typeof parseInt (nombre));

metodoParseFloat = console.log(typeof parseFloat (nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio 

*/

// conversión de number a string

//console.log(typeof String(edad));

//console.log(typeof edad.toString());

//conversion de boolean a number

/*

let numero = Number (esMayorEdad);

console.log(typeof(numero));

let texto = String(esMayorEdad);

console.log(typeof (texto));

console.log(typeof esMayorEdad. toString());

*/

/*

invertir boolean

let negación = !esMayorEdad;

console.log (negación);

*/

// concatenar

/*

let saludo = "Hola humano ";
let frase = "el futuro es hoy, oiste viejo?";

texto = saludo + frase;

console.log(texto);

*/

/*

Tipos de datos:

> - String (cadenas de texto)
> - Number (numéricos)
> - Booleans (booleanos: true or false)
> - Null (nulos)
> - Undefined (Indefinidos)
> - Objects (Objects)
> - Objects (Arrays)

*/

/*

console.log(); Nos permite visualizar en consola del navegador el código de JS

console.wran(); Muestra un mensaje de advertencia.

console.error(); Muestra un mensaje de error.

console.table();

*/

let firstName;

firstName = 'Daniel';

let lastName = 'Maldonado';

console.log(firstName + " " + lastName);

console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/* 

ECMAScript 6 (ES6). Interpolación de Cadenas 

> - backticks `` (ALT GR + 96) o (ALT GR + })

> - Para variables, las invocamos ${variable}

> - Texto para string

*/

let age = 37;

console.log(`Mi nombre es ${firstName},
mi apellido es ${lastName}
y tengo ${age} años`);

//console.warn();

console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);

//console.error();

console.error(`Status 404: Failed`);

/* 

- Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.

- Los arrays se pueden manipular mediante métodos específicos.

- Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.

-Un array posee "n" cantidad de elementos.

-Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con tipo de dato.

*/

let arreglo1 = []; // Arreglo vacío

console.log(`Array vacío ${arreglo1}`);

// Los elementos de un array se separan mediante comas

let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; // Array de String

console.log(cars);

// Longitud e índice son diferentes. La longitud (length) es el número de elementos y el índice corresponde a cada elemento a partir del 0.

console.log(typeof(cars)); // Output: object

//Array de Numbers

let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200]

console.log(salariesMxn.length); // Output: 12

console.log(salariesMxn);

/* 

Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.

Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2);
    }

Los objetos pueden almacenar diferentes tipos de valores.

*/

const employee = {

  firstName:  "Rey David",

  lastName: "Martínez",

  age: 29,

  country: "México"

}

console.log(employee);

// Mostrando mi array como tabla

console.table(cars);

// Mostrando mi objeto como tabla

console.table(employee);