package controlFlujo;

import java.util.Scanner;

public class FlujoControl {

	public static void main(String[] args) { // Debe coincidir la clase con el nombre del documento/proyecto
		
		// Recuerda que para que algo se ejecute, siempre debe ir en el metodo principal
		
		
		// Primero defino una variable de tipo String donde se almacena un dato

		/*
		
		String viaje = "16-01-2024"; //null // Dejo en null y despues agrego fecha
		
		// Variable declarada e inicializada, en null a proposito, para tener un "espacio" de memoria ya asignado, y solo reemplazarlo con un nuevo dato
		
		//Para validar si podemos viajar en cierta fecha
		
		if(viaje != null) { // variable vacia
			
			System.out.println("Ya no tenemos fechas disponibles, una disculpa.");
			
		}else {
				
				System.out.println("Puede reservar su viaje");
				
			}
			
			*/
		
		///////////////////////////////////////////////////////
		
		/*
		
		//Validacion de contraseña
		
		Scanner scanner = new Scanner(System.in);

		// Solicitar la primera contraseña
		        
		System.out.print("Ingrese la contraseña: ");
		        
		String contraseña1 = scanner.nextLine();

		// Solicitar la segunda contraseña
		        
		System.out.print("Ingrese la contraseña nuevamente: ");
		        
		String contraseña2 = scanner.nextLine();

		// Verificar si las contraseñas coinciden
		        
		if (contraseña1.equals(contraseña2)) {
		            
			
		System.out.println("Las contraseñas coinciden. Acceso permitido.");
		
		        } else {
		        	
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		            
		        }

		// Cerrar el scanner
		        
		scanner.close();
		
		
		*/
		
		
		/////////////////////////////////////////////////////
		
		
		// switch: para seleccionar comida de la dulceria del cine
		
		// Seleccion de opciones, variable que almacena dicha opcion
		
		/*
		
		int menu = 5;
		
		// Crear un menu
		
		System.out.println("Bienvenido a la dulceria, que desea ordenar?");
		
		System.out.println("1. Palomitas");
		
		System.out.println("2. Refresco");
		
		System.out.println("3. Nachos");
		
		System.out.println("4. HotDog");
		
		System.out.println("5. Pagar");
		
		System.out.println("No contamos con eso en nuestro menu, por favor seleccione una opción valida (1-5).");
		
		switch(menu) {
		
		case 1: 
			
			System.out.println("Usted ha agregado palomitas.");
			
			// Aquí agregamos una opcion y mensaje.
			
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
		
		*/
		
		
		////// EJERCICIO EQUIPOS ////////////
		
		Scanner scanner = new Scanner (System.in);
		
		// Crear un menu
		
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
			
			// Aquí agregamos una opcion y mensaje.
			
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
