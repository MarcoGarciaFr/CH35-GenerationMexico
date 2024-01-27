package org.generation.banco;

/*

	En esta clase se definen los métodos para disparar las excepciones, es decir, el try-catch. Sin embargo, aquí no se ejecuta el try-catch.
	
	Se definen otros métodos como depositar dinero, retirar dinero.
	
	Requerimentos:
	
		- Trabajar bajo POO
		
		- Encapsular (modificadores, getters y setters)
		
		- Crear variables y métodos para instanciar objetos.

*/

public class CuentaBancaria {
	
	// Atributos: Podemos agregar (Nombre del cliente, rfc, etc...)
	
	private double saldo;
	
	private int idCuenta;
	
	// Constructor que recibe solamente el atributo idCuenta

	public CuentaBancaria(int idCuenta) {

		this.idCuenta = idCuenta;
		
	}
	
	// Método para depositar dineros
	
	public void depositar(double monto) {
		
		saldo += monto; // Esto es lo mismo que el saldo = saldo + monto
		
	}
	
	// Método para retirar dineritos
	
	/* 

		Verificar si el monto a retirar es menor o igual al saldo actual.
		
			- true: Se puede retirar el monto solicitado
			
			- false: No se puede retirar y calculamos cúanto dinero falta para completar la operación
	
	*/
	
	public void retirar (double monto) throws FondosInsuficientesException {
		
		if(monto <= saldo) {
			
			saldo -= monto; // Esto es lo mismo que saldo = saldo - monto;
			
		}else {
			
			double faltante = monto - saldo;
			
			// Crear la instancia de la clase FondosInsuficientesException con las palabras reservadas throw new e y le pasamos el parámetro correspondiente a la variable que disparar la excepción.
			
			throw new FondosInsuficientesException(faltante); // Esto nos va a marcar un error, porque queremos instanciar de manera local y no lo encuentra, para ello necesitamos "heredarlo" como parte del encabezado del método con la palabra reservada throws y el nombre de la excepción.
				
		}
		
	}
	
	// Getters y Setters

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
}
