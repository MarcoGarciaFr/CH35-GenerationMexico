package loops;

public class ForLoop {

	public static void main(String[] args) {
		
		/*
		
		 El ciclo For, nos proporciona una forma compacta de iterar sobre valores.
		 
		 for (inicialización; condición; contador (incremento/decremento)){
		 
		 bloque de código
		 
		 }
		 
		*/
		
		/*
		
		// for con variable local
		
		for (int numero = 0; numero <= 10; numero++) {
			
			System.out.println("Numero es igual a " + numero);
			
		}
		
		*/
		
		/*
		
		// for con variable global
		
		int contador;
		
		for(contador = 1; contador <=5; contador++) {
			
			System.out.println("La cuenta es " + contador);
			
			}
			
			*/
			
			
			// Bucles anidados--Bucle dentro de otro bucle.
			
			// Imprimir un triangulo con asteriscos
			
			int filas = 5;
			
			for(int i = 0; i < filas; i++) {
				
				// bloque de código que va iterar con el bucle
				for(int j = 0; j <= i; j++) {
					
					System.out.print("*");
					
				}
				
				System.out.println();		
			
		}
		
	} // metodo

} // clase
