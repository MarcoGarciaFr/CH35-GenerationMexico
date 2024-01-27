package loops;

import java.util.Scanner;

public class DoWhileLoop {

	public static void main(String[] args) {
		
		
		/*
		 
		  Ciclo Do While, evalua la expresión en la parte inferior del ciclo.
		  
		  Por tanto, las declaraciones dentro del blo "do" siempre se ejecutan al menos una vez.
		  
		*/
		
		/*
		
		// Cuenta del 1 a 20
		
		int cuenta = 5;
		
		do {
			
			System.out.println("cuenta " + cuenta + " Total");
			
			cuenta++;
			
		}while(cuenta < 0); // Output 1 ya se ejecuto al menos 1 vez
		
		*/
		
////////////////////////////////////////////////////////
		
		
		/*
		 
		 * Crear un programa para un cajero bancario
		 
		 * - El programa me mostrará 4 opciones:
		 
		 * 1. Consultar saldo
		 
		 * 2. Ingresar dineros
		 
		 * 3. Retirar dineros
		 
		 * 4. Salir
		 
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 
		 
		 */
		
		System.out.println("Bienvenido al banco City Generation, elija algunas de nuestras opciones disponibles. ");
		
		System.out.println("1. Consultar saldo");
		
		System.out.println("2. Ingresar dineros");
		
		System.out.println("3. Retirar dineros");
		
		System.out.println("4. Salir, por favor tome su dinero y/o recibo");
		
		Scanner scr = new Scanner(System.in);
		
		int opcion;
		
		do {
			
			opcion = scr.nextInt();
			
			switch(opcion) {
			
			case 1: System.out.println("Consultar saldo");
				
				break;
				
			case 2:	System.out.println("Ingresar dinero");
				
				break;
				
			case 3: System.out.println("Retirar dinero");
				
				break;
				
			case 4: System.out.println("Salir, tomar efectivo y/o recibo");
			
				break;
				
			default: System.out.println("Por favor elija una opcion valida de nuestro menú");
			
				break;
			
			}
			
		}while(opcion != 4);
		
		scr.close();
		
	}

}
