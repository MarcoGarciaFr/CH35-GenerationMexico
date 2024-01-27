package org.generation.collections;

import java.util.ArrayList;

import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		
		// ********** Arrays ********* //
		
		String[] names = {"Jonathan", "Gonzalo", "Fernanda", "Lizbeth", "Arturo", "Uriel", "Martin", "Lucero"};
		
		// Imprimiendo Arrays
		
		System.out.println(Arrays.toString(names));
		
		// Otra creación de Array
		
		int[] edades = {12, 3, 25, 55, 69, 41, 29, 37, 18};
		
		System.out.println(Arrays.toString(edades));
		
		// Acceder a cada elemento de Array
		
		String name1 = names[0];
		
		System.out.println("El primer nombre de la lista es " + name1);
		
		int edad1 = edades[2];
		
		System.out.println("La edad de " + name1 + " es de " + edad1 + " años"); // La edad de Jonathan es de 25 años
		
		String name2 = names[2];
		
		int edad2 = edades[8];
		
		System.out.println("La edad de " + name2 + " es de " + edad2 + " años");
		
		// Obtener la longitud del Array
		
		int longitudNames = names.length;
		
		System.out.println("El Array names tiene " + longitudNames + " elementos");
		
		// Obtener el último elemento
		
		// String ultimoElemento = names[longitudNames - 1]; // La longitud ya vive en la variable `longitudNames`
		
		String ultimoElemento = names[names.length - 1]; // La longitud NO vive en una variable
		
		System.out.println("El último elemento del Array es " + ultimoElemento); // Lucero
		
		// Mostrar cada elemento utilizando forEach
		
		for(String name : names) {
			
			System.out.println(name);
		}
		
		// ********** ArrayList ********** //
		
		// ArrayList es un array que puede cambiar de tamaño. Es la clase de Java que representa la estructura de datos de Arrays. Permite elementos duplicados y recibe varios métodos para su manipulación
		
		// Funcionan de ambas maneras, pero por buena práctica se debe utilizar la primera versión:
		
		ArrayList<String> films = new ArrayList<String>();
		
		ArrayList<Integer> matricula = new ArrayList<>(); // Wrapper class
		
		ArrayList<Character> characters = new ArrayList<>();
		
		
		// Agregar elementos
		
		films.add("Inception");
		
		films.add("Se7en");
		
		films.add("The Shining");
		
		films.add("Pulp fiction");
		
		films.add("Mr Nodoby");
		
		films.add("The shutter island");
		
		films.add("Ready Player One");
		
		System.out.println(films);
		
		// Obtener un elemento: name.get(index);
		
		String film1 = films.get(0);
		
		System.out.println("La primer película es " + film1);
		
		// Modificar un elemento: name.set(index, newValue)
		
		// ***** String film3 = films.set(3, "Memento"); ******
		
		films.set(3, "Memento"); // Elimina la variable 'film3' ya que no la estás utilizando y añade la pelicula a la posición requerida
		
		String film3Get = films.get(3);
		
		System.out.println(film3Get);
		
		// Conocer el tamaño del ArrayList: name.size();
		
		int sizeFilms = films.size();
		
		System.out.println("El tamaño del ArrayList es de " + sizeFilms + " elementos");
		
		// Agregando un elemento extra y después eliminarlo: name.remove(index);
		
		films.add("The fountain");
		
		System.out.println(films);
		
		films.remove(7);
		
		System.out.println(films);
		
		// Mostrando los elementos del ArrayList en lista
		
		System.out.println("******** Films en lista *********");
		
		for(String film : films) {
			
			System.out.println(film);
		}
		
		matricula.add(25253);
		
		characters.add('A');
		
		System.out.println(matricula);
		
		System.out.println(characters);

	}

}
