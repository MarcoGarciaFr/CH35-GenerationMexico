/*

Paradigmas de programación

Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.

Programación basada en eventos: Se basa en la gestión y respuesta de eventos.

Programación declarativa: Explicar lo que queremos obtener.

Programación orientada a objetos: Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

*/

// Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona{

    nombre = "";

    apellido = "";

    edad = 0;

    email = "";

    telefono = "";

    // Objetos...

    // El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos.

    // Para inicializar un objeto es necesario definir un constructor que tomara los atributos.

    // clases = molde Objeto = gomita constructor = chefsitx atributos = ingredientes metodos = comportamientos

    constructor(nombre, apellido, edad, email, telefono){

        this.nombre = nombre;

        this.apellido = apellido;

        this.edad = edad;

        this.email = email;

        this.telefono = telefono;

    }

    comer(){

        console.log("Bon apetit");
    
    } // Método comer
    
    bailar(){
    
        console.log("Dale hasta el suelo");
    
    } // Método bailar
    
    mostarInfo(){
    
        console.log("Nombre: ", this.nombre);

        console.log("Apellido: ", this.apellido);

        console.log("Edad: ", this.edad);

        console.log("Email: ", this.email);

        console.log("Telefono: ", this.telefono);
    
    } // Método mostrarinfo

}

let usuario1 = new persona("Fernanda", "Ramos", 31, "fer@gmail.com", "5574123698");

let usuario2 = new persona("Alejandro", "González", 28, "alejandro@gmail.com", "5543219876");

let usuario3 = new persona("María", "López", 35, "maria.lopez@example.com", "5512345678");

let usuario4 = new persona("Carlos", "Martínez", 40, "carlosm@example.com", "5598765432");

let usuario5 = new persona("Laura", "García", 26, "laura_garcia@example.com", "5587654321");

console.log(usuario1); // imprimir objeto completo

console.log(usuario4.email); // imprimir un atributo especifíco

console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email);

usuario4.comer(); // Invocar el método

usuario1.mostarInfo();

console.log(usuario3.telefono, usuario5.apellido);

// Pilares de la programacíón orientada a objetos (4)

/*

> Herencia

> Polimorfismo

> Encapsulamiento

> Abstracción

*/

// Herencia nos permite heredar a clases inferiores para poder optimizar el programa

class arrendadxr extends persona{  // subclase

    capacidad = 0;

    costo = 0;

    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar){

        super(nombre, apellido, edad, email, telefono)

        this.capacidad = capacidad;

        this.costo = costo;

        this.nombreLugar = nombreLugar;

    }

    mostrarInfo(){

        console.log("Capacidad:", this.capacidad);
    
        console.log("Costo:", this.costo);
    
        console.log("Nombre del Lugar:", this.nombreLugar);
    }

}

/*

class arrendadxrGuadalajara extends arrendadxr{

}

*/

// Instanciar

let arrendadxr1 = new arrendadxr("Rocio", "Hernandez", 29, "rocio@gmail.com", "5541236987", 100, 50000, "salon G");

console.log(arrendadxr1);

console.log(arrendadxr1.costo);

arrendadxr1.mostrarInfo();

/*

class Animal{
    
    sonido(){

      console.log('Hace un sonido genérico');

    }
}
  
class Perro extends Animal{
    
    sonido(){

      console.log('Guau guau');

    }

}
  
class Gato extends Animal{

    sonido(){

      console.log('Miau');

    }
}
  
const perro = new Perro();

const gato = new Gato();
  
perro.sonido();  

gato.sonido();

*/

/*
  
Polimorfismo: tener objetos de diferentes tipos que pueden ser manipulados en común.

Nota: La posibilidad de realizar cambios en distintos objetos que comparten atributos.
  
*/

class producto{

    marca = "";

    precio = 0;

    constructor(marca, precio){

        this.marca = marca;

        this.precio = precio;

    }

    mostrarDescripcion(){

        console.log("Marca: ");

        console.log("Precio: ");

    }

}

let producto1 = new producto("cerave", 85);

/*

====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.

Ejemplo de Polimorfismo:

class Animal{
    
    sonido(){
        
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal{

    sonido(){

        console.log('Guau guau');

    }

}

class Gato extends Animal{

    sonido(){
        
        console.log('Miau');

    }
}

const perro = new Perro();

const gato = new Gato();

perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"

gato.sonido(); //el mismo método sonido(), para gato muestra "miau"

*/

// Encapsulamineto ocultar la implementación de un objeto y solo mostrar los datos necesarios.

class Usuario{

    #contraseña;

    constructor(userName, correo, contraseña){
        
        this.userName = userName;

        this.correo = correo;

        this.#contraseña = contraseña;

    }

    verificarContraseña(contraseña){

        return this.#contraseña === contraseña;
    
    }

}

// Abstraccion no es nada mas que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, metodos, constructores y objetos.

/* 

Los objetos tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son mas flexibles y generalmente se ejecutan con fetch.

*/

let objetoJson ={

    "nombre": "Juanín",

    "apellido": "Juan Harry",

    "edad": 31,

}

console.log(objetoJson);

let objetoLiteral = {

    nombre: "Juanin",

    apellido: "Juan Harry",

    edad: 31,

    email: "juanin@gnail.com",

    telefono: "5574980693",

}

console.log(objetoLiteral);

// Principio Solid

/*

1° Principio de responsabilidad unica (Single Responsability Principle) 

Una clase de tener asignada una tarea o responsabilidad especifica y esta no debería de cambiar.

2° Principio abierto/cerado (open/closed principle OCP)

Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en las mismas.

3° Principio de sustitución de Liskov (Liskov Sustitution Principle LSP)

Una clase hijo puede sustituir objetos de una clase padre

4° Principio de segregación de interfaces (Interface Segregation Principle ISP)

Delimitar los métodos que necesito y dejar fuera los innecesario.

5° Principio de inversión de dependencias (Dependency Inversion Principle DIP)

*/

/*

Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificación. Definir los métodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoría o no

Atributos...

Nombre

Calificación

Métodos...

imprimirCalificación

evaluación

La calificación aprobatoria es de 6

if para evaluar la calificación



*/

class Alumno {

    nombre = "";

    calificacion = 0;

    constructor(nombre, calificacion){

        this.nombre = nombre;

        this.calificacion = calificacion;

    }

    imprimirCalificacion(){

        alert(`Calificación de ${this.nombre}: ${this.calificacion}`);
    }

    evaluacion(){

        const calificacionAprobatoria = 6;

        if(this.calificacion >= calificacionAprobatoria){

            alert(`${this.nombre} le caes bien al profx, has aprobado`);

        }else{

            alert(`${this.nombre} uh! ¿Donde esta tu honor basura?, no aprobaste soldadx`);

        }
    }
}

let nombreAlumno = prompt("Dame tu nombre soldadx:");

let calificacionAlumno = parseFloat(prompt("Ahora, dame tu calificación:"));

let alumno = new Alumno(nombreAlumno, calificacionAlumno);

alumno.imprimirCalificacion();

alumno.evaluacion();


