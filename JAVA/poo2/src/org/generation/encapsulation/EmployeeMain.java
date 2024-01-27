package org.generation.encapsulation;

public class EmployeeMain {
	
	public static void main(String[] args){
		
		// Instanciar los objetos
		
		Employee Daniel = new Employee("Daniel", "Maldonado", 7836, 8596.33d, "Instructor");
		
		Employee Abigail = new Employee("Abigail", "Martinez", 5274, 19754.20d, "Desarrolladora frontend");
		
		Employee Arturo = new Employee("Arturo", "Avila", 4403, 17999.62d, "Desarrollador backend");
		
		System.out.println(Daniel);
		
		System.out.println(Abigail);
		
		System.out.println(Arturo);
		
		// Invocando métodos definidos previamente (trabajar, calcularSalario, capacitarse, infoGeneral)
		
		Daniel.infoGeneral();
		
		Arturo.calcularSalario();
		
		Abigail.capacitarse();
		
		// Utilizar información específica de cada objeto mediante sus propiedades
		
		// Usando Getter
		
		System.out.println(Daniel.getNombre() + " " + Daniel.getApellido() + " ocupa el puesto de " + Daniel.getPuesto());
		
		// Necesitamos traer la información mediante getters ya que los atributos se convirtieron en privados
		
		System.out.println(Abigail.getPuesto() + " gana $" + Abigail.getSalario() + " pesos");
		
		
		// Actualizando información mediante Setter
		
		Arturo.setSalario(24598.11);
		
		Arturo.calcularSalario();
		
	}

}
