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
		
		double costoPasaje = 380.50;
		
		int edad = 58;
		
		boolean credenInapam = false;
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("Tiene descuento? " + costoPasaje);
		
		
		// ! not
		
		boolean asientosDisponibles = true;
		
		boolean libres = true;
		
		boolean asientosConDescuento = !libres;
		
		
		System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
		
		
		System.out.println();
		System.out.println();
		
		double boletoCosto = 350;
		
		int asientosTotales = 62;
		
		int asientosAdultosMayores = 4;
		
		int asientosEstudiantes = 6;
		
		double descuentoInapam = 0.35;
		
		double descuentoEstudiantes = 0.30;
		
		
	    
		

	}

}
