package org.generation.exercises;

import java.util.ArrayList;

import java.util.Scanner;

/*

 * Programa que permite que un usuario agregue nombre completo de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados. *
 
 -- Requerimientos:
 
  		> Utilizar ArrayList para guardar a los estudiantes (ArrayList<String>)
  		
		> Scanner para interactuar con el usuario y permitir que agregue estudiantes
		
		> Loop para permitir que se agreguen varios estudiantes (do-while)
		
 		> Opción para salir del loop con la palabra 'Salir' (if-else, try-catch, !=, switch son posibles opciones)
 		
		> Mostrar lista de estudiantes (for-each)
		
 */

public class SistemaEscolar {
	
	public static void main(String[] args) {
		
		// Inicializar un ArrayList para guardar a los estudiantes
		
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		// Scanner para el usuario
		
		Scanner scanner = new Scanner(System.in);
		
		// Loop para permitir agregar usuarios
		
		String nombreEstudiante; // Inicializado de manera global
		
		do {
			
			System.out.println("Ingresa el nombre del estudiante. Escribe 'Salir' para finalizar.");
			
			nombreEstudiante = scanner.nextLine(); // Invocado de manera local
			
			estudiantes.add(nombreEstudiante);
			
		}while(!nombreEstudiante.equals("Salir")); // Siempre que NO se escriba "Salir", el loop se sigue ejecutando.		
		
		// Mostrar lista de estudiantes (for-each)
		
		System.out.println("** Lista de estudiantes:");
		
		for(String estudiante : estudiantes) {
			
			// Si no quiero que se muestre la palabra 'Salir' voy a agregar una condicional
			
			if(!estudiante.equals("Salir")) {
				
				System.out.println(estudiante);
				
			}
			
		}
		
		scanner.close();
		
	}

}
