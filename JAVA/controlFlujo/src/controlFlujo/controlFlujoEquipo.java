package controlFlujo;

import java.util.Scanner;

public class controlFlujoEquipo {

	public static void main(String[] args) {
		
		
		////// EJERCICIO EQUIPOS ////////////
		
		Scanner scanner = new Scanner (System.in);
		
		
		System.out.println("Bienvenido a la dulceria, que desea ordenar?");
		
		System.out.println("1. Palomitas");
		
		System.out.println("2. Refresco");
		
		System.out.println("3. Nachos");
		
		System.out.println("4. HotDog");
		
		System.out.println("5. Pagar");
		
		System.out.println("No contamos con eso en nuestro menu, por favor seleccione una opción valida (1-5).");
		
		int menu1 = scanner.nextInt();
		
		switch(menu1) {
		
		case 1: 
			
			System.out.println("Usted ha agregado palomitas.");
			
			break;
			
		case 2:
			
			System.out.println("Usted ha agregado Refresco a su combo.");
			
			break;
			
		case 3:
			
			System.out.println("Usted ha agregado Nachos a su combo.");
			
			break;
			
		case 4:
			
			System.out.println("Usted ha agregado HotDog a su combo.");
			
			break;
			
		case 5: 
			
			System.out.println("Usted ha seleccionado pagar su combo.");
			
			break;
			
		
		default:
			
			System.out.println("Por el momento no contamos con esa opcion en nuestro menu, lo invitamos a seleccionar una opcion valida");
			
			break;
			
		} // switch
		
		scanner.close();
			
		
	} // main

} // clase