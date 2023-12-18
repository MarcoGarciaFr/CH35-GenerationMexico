// Ejercicios para esta sesion

/*

* Ejercicio 1
* 
* Elabora un programa que determine si una persona tiene edad
* suficiente para votar
* 
* Debe recibir como parametro la edad
* 
* Consideraciones: utilizar la estructura if-else

*/

const puedeVotar = (edad) => {
    if (edad >= 18) {
        return "Puede votar";
    } else {
        return "No puede votar";
    }
};

console.log(puedeVotar(20)); // Ejemplo de uso: Cambia el número para probar diferentes edades

/*

* Ejercicio 2
* 
* Desarrolla un programa que evalue si un numero es divisible
* entre 7 y 8
* 
* Debe recibir como parametro un numero, cual sea
* 
* Si se cumple, imprimir verdadero
* Si no, imprimir falso
* 
* 
* Consideracion - Utilizar la estructura if-else
* Casos de prueba: 56, 7, 8, 0, 224, 73

*/

// Ejercicio 2
const esDivisiblePor7y8 = (numero) => {
    if (numero % 7 === 0 && numero % 8 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(esDivisiblePor7y8(56)); // Ejemplo de uso: Prueba con diferentes números

/*

* Ejercicio 3
* 
* Desarrolla un programa que evalue si un numero es divisible
* entre 4 o 9
* 
* Debe recibir como parametro un numero aleatorio
* 
* Si se cumple, imprimir verdadero
* Si no, imprimir falso
* 
* Consideracion - Utilizar la estructura if-else

*/

const esDivisiblePor4o9 = (numero) => {
    if (numero % 4 === 0 || numero % 9 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(esDivisiblePor4o9(12)); // Ejemplo de uso: Prueba con diferentes números

/*

* Ejercicio 4
* 
* Realizar un programa que reciba como parametro una categoria de peliculas
* 
* -accion
* -drama
* -comedia
* -romance
* -suspenso
* -terror
* 
* Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
* de acuerdo al parametro recibido
* 
* Consideraciones: utilizar la estructura switch

*/

const recomendacionPelicula = (categoria) => {
    switch (categoria) {
        case "accion":
            return "Te recomiendo 'The Dark Knight'";
        case "drama":
            return "Te recomiendo 'La La Land'";
        case "comedia":
            return "Te recomiendo 'Superbad'";
        case "romance":
            return "Te recomiendo 'Before Sunrise'";
        case "suspenso":
            return "Te recomiendo 'Gone Girl'";
        case "terror":
            return "Te recomiendo 'Hereditary'";
        default:
            return "Categoría no reconocida";
    }
};

console.log(recomendacionPelicula("romance")); // Ejemplo de uso: Cambia la categoría para obtener diferentes recomendaciones

/*

* Ejercicio 5
* 
* Crear una interfaz de un cajero ATM
* 
* Debe recibirse como parametro alguna de las siguientes opciones
* 
* 1. Retirar dinero
* 2. Transferencia
* 3. Deposito
* 4. Pago de servicios
* 
* Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
* Utilizar if/else

*/

const accionCajeroATM = (opcion) => {
    if (opcion === "Retirar dinero") {
        console.log("Por favor, retire su dinero.");
    } else if (opcion === "Transferencia") {
        console.log("Realizando transferencia...");
    } else if (opcion === "Deposito") {
        console.log("Deposito exitoso.");
    } else if (opcion === "Pago de servicios") {
        console.log("Procesando pago de servicios...");
    } else {
        console.log("Opción no válida");
    }
};

accionCajeroATM("Retirar dinero"); // Ejemplo de uso: Cambia la opción para simular diferentes acciones

/*

* Ejercicio 6
* 
* Escribir en codigo un programa conversor de divisas
* 
* Debe recibir como parametro una cantidad en pesos mexicanos y
* Segun sea la opcion que se indique, realizar la conversion correspondiente
* 
* 1. A dolares estadounidenses
* 2. A euros 
* 3. A yenes japoneses
* 4. A libra esterlina
* 5. A franco suizo
* 
* Consideracion: estructura switch
* 
*/

const convertirDivisa = (cantidad, opcion) => {
    switch (opcion) {
        case 1:
            return cantidad / 20; // Considerando 1 dólar = 20 pesos mexicanos
        case 2:
            return cantidad / 22; // Considerando 1 euro = 22 pesos mexicanos
        case 3:
            return cantidad / 0.18; // Considerando 1 yen = 0.18 pesos mexicanos
        case 4:
            return cantidad / 25; // Considerando 1 libra = 25 pesos mexicanos
        case 5:
            return cantidad / 21; // Considerando 1 franco suizo = 21 pesos mexicanos
        default:
            return "Opción no válida";
    }
};

console.log(convertirDivisa(1000, 2)); // Ejemplo de uso: Cambia la cantidad y la opción para obtener diferentes conversiones