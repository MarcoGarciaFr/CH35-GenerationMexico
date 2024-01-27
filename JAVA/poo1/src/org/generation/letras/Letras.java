package org.generation.letras;

import java.util.Scanner;

/*

	Crear un programa que le solicite un mensaje al usuario y cuente cuántas vocales, consonantes, números y simbolos posee dicho mensaje.
	
	Letras: Métodos para interactuar con el usuario
	
	LetrasMain: Vamos a instanciar los objetos
	
	Contador: Métodos para contar vocales, consonantes, números y simbolos

*/

public class Letras {
	
	// Para que nuestro usuario interactúe, definimos un Scanner
	
	Scanner scanner = new Scanner(System.in);
	
	// Metemos el Scanner dentro de un método, para llamarlo cuantas veces desee
	
	public String leerEntrada() {
		
		return scanner.nextLine();
		
	}
	
	// Método para proporcionar contexto al usuario
	
	public void mostrarMensaje(String mensaje) {
		
		System.out.println(mensaje);
		
	}

}
