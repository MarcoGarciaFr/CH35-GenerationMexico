/*

* Ejercicios

* Ejercicio de Arrays:

Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.

* Temperaturas diarias en grados Celsius para una semana

const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.

*/

const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];

const celsiusToFahrenheit = (celsius) => {
    return celsius * (9/5) + 32;
};

let temperaturasFahrenheit = [];

for (let i = 0; i < temperaturasCelsius.length; i++) {
    let fahrenheit = celsiusToFahrenheit(temperaturasCelsius[i]);
    temperaturasFahrenheit.push(fahrenheit);
}

console.log('Temperaturas en Celsius:', temperaturasCelsius);
console.log('Temperaturas en Fahrenheit:', temperaturasFahrenheit);
