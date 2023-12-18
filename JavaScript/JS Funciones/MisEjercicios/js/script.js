// Functions in JavaScript

// Repo containing excercises to practice functions in JS.

// Exercises

/////////////////////////////////////////////////////////////

/*

**1. Convert Minutes into Seconds.**

Write a function that takes an integer minutes and converts it to seconds.

*Examples*

    convert(5) ➞ 300
    convert(3) ➞ 180
    convert(2) ➞ 120

*/

function convertidor(m){

    m = parseInt(prompt("Hola chaval, dame tu numero de la suerte: "));

    let resultado = m * 60;
    
    return console.log("Tu numero de la suerte convertido en segudos es: " + resultado);

}

convertidor();

/////////////////////////////////////////////////////////////

/*

**2. Return the Next Number from the Integer Passed.**

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

*Examples*

    addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2

*/

function incrementar(x){

    let resultado = x+1;

    return resultado;

}
 
console.log(`Si compramos cierto numero de gomichelas y le sumamos +1, esto nos da un: `+ incrementar(7) + `gomichelas`);

/////////////////////////////////////////////////////////////

/*

**3. Area of a Triangle.**

Write a function that takes the base and height of a triangle and return its area.

*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50

*/

function area( base, altura){

    return(base*altura)/2;

}

console.log(area(5, 6));


/////////////////////////////////////////////////////////////

/*

**3. Area of a Triangle.**

Write a function that takes the base and height of a triangle and return its area.

*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50

*/

const calEdad = (age) =>{

    return age *  365
}

console.log(calEdad(65));

/////////////////////////////////////////////////////////////

/*

**5. Power Calculator.**

Create a function that takes voltage and current and returns the calculated power.

*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600

*/

function circuitPower( voltage, current){

    return(voltage*current);

}

console.log(circuitPower(5, 6));

/////////////////////////////////////////////////////////////

/*

**6. Return Something to Me!.**

Write a function that returns the string "something" joined with a space " " and the given argument a.

*Examples*

    giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    giveMeSomething("something") ➞ "something something"

*/

const mensaje = function(a = "algo"){

    return a;  

}

console.log(a + `es mejor que nada`);

/////////////////////////////////////////////////////////////

/*

**7. Sum of Polygon Angles.**

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

*Examples*

    sumPolygon(3) ➞ 180
    sumPolygon(4) ➞ 360
    sumPolygon(6) ➞ 720

*/

const sumAngulos = (n) => (n - 2) * 180;

console.log(sumAngulos(3)); 
console.log(sumAngulos(4)); 
console.log(sumAngulos(6)); 

/////////////////////////////////////////////////////////////

/*

**8. Convert Hours and Minutes into Seconds.**

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

*Examples*

    convert(1, 3) ➞ 3780
    convert(2, 0) ➞ 7200
    convert(0, 0) ➞ 0

*/

const convertidor = (horas, minutos) => (horas * 3600) + (minutos * 60);

console.log(convertidor(1, 3));
console.log(convertidor(2, 0)); 
console.log(convertidor(0, 0)); 