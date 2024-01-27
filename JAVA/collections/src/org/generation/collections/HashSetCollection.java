package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
	
	public static void main(String[] args) {
		
		// HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos.
		
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		
		animals.add("Caballo");
		
		animals.add("Perro");
		
		animals.add("Gato");
		
		animals.add("Ornitorrinco");
		
		animals.add("Zebra");
		
		animals.add("Ornitorrinco");
		
		animals.add("Mapache");
		
		animals.add("Capibara");
		
		animals.add("Capibara");
		
		animals.add("Capibara");
		
		animals.add("Capibara");
		
		animals.add("Capibara");
		
		animals.add("Capibara");
		
		// Imprimir el Hashset
		
		System.out.println(animals);
		
		// Conocer si un elemento se encuentra dentro del Set: contains();
		
		System.out.println(animals.contains("Capibara"));
		
		// Eliminar un elemento: remove();
		
		animals.remove("Zebra"); // Elimino
		
		System.out.println(animals); // Imprimo el Set sin el elemento eliminado
		
		// Agregando elementos en una sola línea
		
		animals.addAll(Arrays.asList("Perrito", "Gatito", "Osito", "Nahual", "Tepezcuintle"));
		
		System.out.println(animals);
		
		/*
	
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 
		 */
		
		
		// Limpiar el HashSet: .clear();
		
		animals.clear();
		
		System.out.println(animals);
		
		// Vuevlo a agregar elementos, pero esta vez nuevos porque se vacio anteriormente el arreglo
		
		animals.addAll(Arrays.asList("Perrito","Gato","Oso","Nahual","Tepezcuintle"));
		
		System.out.println(animals);

	}

}
