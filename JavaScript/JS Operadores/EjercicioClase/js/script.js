/*

Operador: Es un signo que especifica que debe efectuar una determinada operación

Operadores aritmeticos: (+, -, *, /, %, ++, --)

Operadores de asignación: (=)

Operadores logicos (&&, ||, !)

Operadores de comparación (==, ===, !=, !==, <, >, <=, >=)

Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)

** Operadores aritmeticos **

(+): suma, se utiliza para sumar dos numeros.

(-): resta, se utiliza para restar un numero de otro.

(*): multiplicación, se utiliza para multiplicar dos numeros.

(/): división, se utiliza para dividir un numero entre otro.

(%): residuo, Se utiliza para obtener el resto de una divisón.

(++): incremento, aumnete de uno en uno la cantidad o el numero.

(--): decremento, disminuye de uno en uno la cantidad o el numero.

*/

let numero1 = 10;

let numero2 = 8;


suma = numero1 + numero2;

resta = numero1 - numero2;

multiplicacion = numero1 * numero2;

division = numero1 / numero2;

residuo = numero1 % numero2;

incremento = numero1;

incremento ++;

decremento = numero2;

decremento --;


console.log(suma);

console.log(resta);

console.log(multiplicacion);

console.log(division);

console.log(residuo);

console.log(incremento);

console.log(decremento);

// Ejemplo de como aplicar un descuento

let precioReal = 1000;

let porcentajeDescuento = 20;


let cantidadDescuento = (precioReal * porcentajeDescuento)/100;

let precioConDescuento = precioReal - cantidadDescuento;


console.log("Precio Real: $" + precioReal);

console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");

console.log("Cantidad de descuento: $" + cantidadDescuento);

console.log("Precio con descuento: $" + precioConDescuento);

/*

Operadores de asignasión:

(=): Este operador no compara, lo que hace es asignar.

*/

let frutas = "manzana"; //manzana

/*

Operadores de comparacion:

(==): Igualdad, compara si nuestros valores son iguales.

*/

let numero3 = 10;

let texto = "10"

console.log(numero3 == texto); // numero y texto

/* 

(===): Igualdad estricta, compara si los valores son iguales y el tipo de dato tambien.

*/

let numero4 = 10;

let texto1 = "10"

console.log(numero4 === texto1); // tipo de dato

/*

(!=): Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realizar la conversión.

*/

let precioCaja = 1499;

let precioMaximo = 1500;

if(precioCaja != precioMaximo){

    console.log("El precio del producto no es igual al precio máximo");

}else{

    console.log("El precio del producto es igual al precio máximo permitido");

}


// Eejmplo de cambiar el tipo de dato

let numero5 = 10;

let numero6 = "10";

if(numero5 != Number(numero6)){

    console.log("Son diferentes");

}else{

    console.log("Los valores son iguales");
    
}

/*

(!==): Desigualdad estricta: este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor.

*/

let  numero7 = 41;

let numero8 = "50";

if(numero7 !== numero8){

    console.log("Los valores son diferentes");

}else{

    console.log("Los valores son iguales");

}

// (>): Mayor que, basicamnete nos indica si un valor es mayor que otro.

let puntuacionfinal = 85;

let putuacionRequerida = 102;

console.log(puntuacionfinal > putuacionRequerida);

// (<): Menor que, nos indica si un valor es menor que otro.

let anios = 20;

let edadLimite = 30;

console.log(anios < edadLimite);

// (>=): Mayor o igual que: Nos dice si un valor es mayor o igual a otro.

let edad = 40;

let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

// (<=): Menor o igual que, nos indica si un valor es menor o igual a otro.

let temperatura = 14;

let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);

// operadores logicos

/*

(&&) And, se utilizan cuando las dos condiciones deben cumplirse.

*/

let mayoriaDeEdad = 18;

let tieneIdentificacion = true;

if(mayoriaDeEdad >= 18 && tieneIdentificacion){

    console.log("Puedes rentar el salón");

}else{

    console.log("No lo puedes rentar");

}

// (||): Or, se utiliza cuando se debe cumplir una condicion u otra.

let esPrime = false;

let descuento = true;

if(esPrime || descuento){

    console.log("Califica para descuento");

}else{

    console.log("No califica para descuento");

}

// (!): Not, se utiliza para negar el valor de una condicion.

let esDiaLibre = false;

if(! esDiaLibre){

    console.log("Se trabaja");

}else{

    console.log("Descansito");

}

//Operadores de cadena...

// (toLowerCase), hace el cambio de nuestro string (texto) a minusculas.

let mensajeUsuario = "Bienvenidx a la tierra";

let cambioMinusculas = mensajeUsuario.toLowerCase();

console.log(cambioMinusculas);

// (toUpperCase), hace el cambio de nuestro string (texto) a mayusculas.

let saludo = "Casi viernes, casi Navidad";

let cambioMayusculas = saludo.toUpperCase();

console.log(cambioMayusculas);

// (trim): quita los espacios

let aviso = "    Ch35    " // "   Ch35  Rifa   "

let sinEspacios = aviso.trim();

console.log(aviso);

console.log(sinEspacios);

// (toString): convierte un tipo de dato number en string.

let numero10 = 31;

let cadenas = numero10.toString();

console.log(cadenas);

// (concat)

let nombre = "Fernanda";

let apellido = "Ramos";

let nombreCompleto = nombre.concat(" ", apellido);

console.log(nombreCompleto);

/*

Expresiones...

expresión aritmetica:

let operacion = 14 + 25 * 12; combina la suma con la multiplicación.

expresion de cadena:

let notificacion = "Casi, " + "Anio nuevo"; expresion concatenando.

expresion logica:

let esMayorDeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparacion.

expresion de asignacion:

let frasco = chocolates; asigna el valor a la variable. 

*/




