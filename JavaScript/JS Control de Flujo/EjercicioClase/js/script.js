console.log("Hola CH35Lovers");

/*  

*Control de flujo y estructuras de control*

* Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código, podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
* tanto dinamico como adaptable
* 
* - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
* de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
* 
* - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
* especificos en indicar qe instrucciones ejecutar y en que orden
* 
* - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
* en caso de que no se necesite
* 
* - Facilitar tanto la escritura de codigo como la claridad de este
* 
* Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
* 
*      - Estructura if-else
*      - Estructura switch
*      - Estructuras de bucles (for, do, do while)
* 
* Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista.

*/

/* 

* Declaración de sentencia if-else

*Palabra reservada if para comenzar la declaración, se coloca un parentesis () donde se debe colocar una expresión lógica (true|false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true), *despues de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un () *simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).

*/

let n= 15;

if (n > 20){

    console.log(true);

}else{

    console.log(false);

}

/*

*if-else-if
* 
* Se trata de la misma sentencia if-else declarada anteriormente
* Lo que vamos a hacer diferente es, en este caso, anidar varias veces
* esta misma sentencia, lo que nos permitira tomar decisiones
* mas complejas
* 
* Usaremos la contatenación.
* Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
* 
* Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
* en codigo poco legible y confuso.

*/

// If anidados

let edad = 28;

if(edad < 18){

    console.log("Eres menor de edad, retirate");

}else if (edad >= 18 && edad < 65){

        console.log("Eres un adulto joven");

}else{

    console.log("Eres un adulto mayor");

}

/* 

*Sentencia switch

*La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programación.

*Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (partipación de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresión que cumpla con un caso especifico, será la secuencia que se va a ejecutar, dentro de la declaración.

*Declaración:

*se empieza por colocar la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.

*Falta indicar el bloque de código que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.

*Dentro de este bloque de código, falta colocar los casos para cada valor que se desee, establecer según sea el valor indicado dentro de el parentesis ().

*Cada uno de estos casos se separa de la siguiente manera:

*case valor: instrucción a ejecutar si el valor empata con este caso.

*Despues, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instruccion...

*break.

*Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.

*Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocaldo no empata con ningun otro dentro de la sentencia o en ninguno de los casos.

* default : mensaje no disponible.

*/

let dia = "miercoles";
switch(dia){

    case "lunes":

        console.log("Odio los lunes att: Garfield");

        break;

    case "martes":

        console.log("quien avienta cuetes los martes?");

        break;

    case "miercoles":

        console.log("Toca presentar proyecto :(");

        break;

    case "jueves":

        console.log("Juevebebes Casi viernes ");

        break;

    case "viernes":

        console.log("Viernes de disfraces");

        break;

        case "sabado":

        console.log("Sabadrink y taquitos");

        break;

    case "domingo":

        console.log("Domingo de misa de 6 am, como Dios manda");

        break;

    default:

        console.log("Día desconocido");

        break;

} // termina switch.

/*

* Operador ternario

* Expresión condicional if-else mas simple y legible.

* Principalmente se usa para simplificar condiciones de una sola expresión.

* tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confuso y poco legible.

* Su declaración es la siguiente:

* Palabra reservada var, let o const:

* se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un parentesis (), despues hay que colocar un caracter ? que indica el camino a seguir, dependiendo de sí, se cumple (o no) la expresión.

*Para separar el resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.

*Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar.

*/

// Ejemplo de operador ternario

let verificacion = n > 5 ? "Si es mayor" : "No es mayor";

console.log(verificacion);

/*

* Cuando usar if-else u cuando switch?

* if-else : cuando necesitemos tomar decisiones bajo condiciones mas flexibles.

* switch: cuando tengamos un conjunto fijo de valores para comparar una expresión.

*/
