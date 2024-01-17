package tiposDeDatosYVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
	
		System.out.println("Hola Mundo");
		
		
		/*
		  Comentarios multilinea
		  
		*/
		
		// Comentarios de una sola linea
		
		// Tipos de datos enteros
		
		byte edad = 15; // Sirve para representar un numero entero 8 bits (-128 al 127)
		
		System.out.println("Edad del participante " + edad);
		
		short usuariosNuevos = 200; // Sirve para representar un numero entero 16 bits (-23768 al 32767)
		
		System.out.println("Usuarixs nuevos " + usuariosNuevos);
		
		int usuariosTotales = 8752; //Sirve para representar un numero entero 35 bit (-2147483648 al 2147483647)
		
		System.out.println("Usuarios Totales " + usuariosTotales);
		
		long usuariosPremium = 9512; // Sirve para representar un numero entero con valores mucho mayores
		
		System.out.println("Usuarios premium "+usuariosPremium);
		
		// Tipos de datos con numeros decimales
		

		float altura = 1.61f; // Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
				
		System.out.println("Altura del usuarix "+ altura);
				
		double peso = 68.800; // Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		
		String costoBoleto = "500";
		
		String zonaBoleto = "52";
		
		System.out.println("Usuarix " + costoBoleto);
		
		System.out.println("Zona a la que pertenece " + zonaBoleto);
		
		// String nombreUsuario = "Fernanda"; // Es una clase para tener cadenas de texto
		
		//String zonaBoleto = "Zona VIP";
		
		// System.out.println("Usuarix " + nombreUsuario);
		
		// System.out.println("Zona a la que pertenece " + zonaBoleto);
		
		char seccion = 'f'; // Sirve para representar valores con un solo caracter
		
		System.out.println("Seccion " + seccion);
		
		boolean clienteFrecuente = true; // Sirve para obtener true or flase utilizando condicionales
		
		System.out.println("Es un cliente frecuente " + clienteFrecuente);
		
		// Conversion de tipos
		
		// Casteo a entero
		
		int pesoCambio = (int) peso;
		
		// Casteo entero
		
		long pesoCambio1 = (long) peso;
		
		System.out.println("double " + peso);
		System.out.println("int " + pesoCambio);
		System.out.println("long " + pesoCambio1);
		
		int nombreCambio = Integer.parseInt(costoBoleto);
		
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona del usuarix segun su boleto " + (nombreCambio * zonaCambio));
		
		
		/*
		
		Operadores aritmeticos 
		+ suma
		- resta
		* multiplicacion
		/ division
		 % Residuo*/
		
		
		/*Operadores de compararcion 
		 == compara si un opernado es igual a otro 
		 != compara si es diferente 
		 <  mayor que 
		 >  menor que 
		 <= mayor o igual que 
		 >= menor o igual que 
		 
		 */
		
		
		// programa para un cine
		
		double precioEntrada = 75.5;
		
		double precioPalomitas = 89.70;
		
		double precioBebida = 35.5;
		
		int capacidadTotal = 500;
		
		
		int personasDentro = 342;
		
		if (personasDentro > capacidadTotal) {
			
			System.out.println("Aforo lleno");
			
		}

		
		double totalEntrada = personasDentro * precioEntrada;
		
		double totalPalomitas = personasDentro * precioPalomitas;
		
		double totalBebidas = personasDentro * precioBebida;
		
		System.out.println("Total de personas " + personasDentro);
		
		System.out.println("Total de entradas " + totalEntrada);
		
		System.out.println("Total de palomitas " + totalPalomitas);
		
		System.out.println("Total de bebidas " + totalBebidas);
		
		
	}

}
