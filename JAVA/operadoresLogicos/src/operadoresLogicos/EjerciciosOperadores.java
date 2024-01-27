package operadoresLogicos;

public class EjerciciosOperadores {

	public static void main(String[] args) {
		
		
		/*
		 
		 &&: operador And  devuelve true si ambas expresiones son verdaderas 
		 ||: operador or devuelve true si almenos una de las dos condiciones se cumple
		 !: operador not si la expresion booleana es flase devuelve true y viceversa
		 
		
		 */
		
		// && and
		
		int anios = 5;
		
		boolean esInfante = true;
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque " + costoInfante);
		
		
		// && Otro metodo
		
		String cliente = "cliente123";
		
		String credenciales = "fertakisfuego123";
		
		boolean credencialCorrecta = cliente.equals("cliente123")&& credenciales.equals("fertakisfuego123");
		
		System.out.println("Las creden si son validas " + credencialCorrecta);
		
		
		// || or
		
		// double costoPasaje = 380.50; no se esta usando, por eso se quitó
		
		int edad = 58;
		
		boolean credenInapam = false;
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("Tiene descuento? " + descuentoAdultoMayor);
		
		
		// ! not
		
		boolean asientosDisponibles = true;
		
		// boolean libres = true; no se esta usando, por eso se quitó y se repite con la primera declaración.
		
		boolean asientosConDescuento = !asientosDisponibles;
		
		
		System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
		
		
		/* 
		 
		 	System.out.println();
	
			System.out.println();
		 	
		 	Ejercicio de un transporte de viajes:

		 	Costo del boleto 350
		 	
		 	62 asientos
		 	
		 	4 destinados a adultxs mayores
		 	
		 	6 destinados a estudiantes
		 	
		 	Descuento a inapam es de 35%
		 	
		 	Descuento a estudiantes es de 30%

		 	Calcular los asientos destinados para los descuentos

		 	Calcular los descuentos de los boletos en ambos casos

		 	Calcular cuanto dinero se ganaría de todos los boletos vendidos
		 	
			double boletoCosto = 350;

			int asientosTotales = 62;
		
			int asientosAdultosMayores = 4;
		
			int asientosEstudiantes = 6;
		
			double descuentoInapam = 0.35;
		
			double descuentoEstudiantes = 0.30;
		 
		*/

	}

}
