package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {
	
	public String leguajeProgramacion;

	public Developer(String nombreCompleto, int id, double salario, String puesto, String leguajeProgramacion) {
		
		super(nombreCompleto, id, salario, puesto);
		
		this.leguajeProgramacion = leguajeProgramacion;
		
	}

	public String getLeguajeProgramacion() {
		
		return leguajeProgramacion;
		
	}

	public void setLeguajeProgramacion(String leguajeProgramacion) {
		
		this.leguajeProgramacion = leguajeProgramacion;
		
	}
	
	public void codear() {
		
		System.out.println("El programador " + this.getNombreCompleto() + " utiliza " + this.leguajeProgramacion);
		
	}

	@Override
	
	public String toString() {
		
		return "Developer [ Id() = " + 
		
		getId() + ", NombreCompleto() = " + 
		
		getNombreCompleto() + ", Puesto() = " +
		
		getPuesto() + ", Salario() = " + 

		getSalario() + ", leguajeProgramacion = " + 
		
		leguajeProgramacion + " ] ";
		
	}
	
}
