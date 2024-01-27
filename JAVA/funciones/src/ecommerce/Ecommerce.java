package ecommerce;

import java.util.ArrayList;

import java.util.List;

public class Ecommerce {
	
	static class Producto{ // Esta es una clase para representar un producto
		
		String nombre;
		
		double precio;
		
		Producto(String nombre, double precio){
			
			this.nombre = nombre;
			
			this.precio = precio;
			
		} // Función
		
	} // Clase
		
		static class CarritoCompra{
			
			List<Producto>productos = new ArrayList<>();
			
			
			void agregarProducto(Producto barbie) { //void: No tiene un valor de retorno, no se le puede asignar un return
				
				productos.add(barbie);
				
			} // Void
			
			double calcularTotal() { //calcular total de carrito de compra
				
				double total = 0;
				
				for(Producto barbie : productos) {
					
					total +=  barbie.precio; // += el valor de la var derecha se asigne al valor de la var izquierda (producto.propiedadPrecio)
					
				} // For
				
				return total;
				
			} // Double
			
		} // Clase CarritoCompra

	public static void main(String[] args) {
		
		
		Producto munieca1 = new Producto ("Chelsea", 98.70);
		
		Producto munieca2 = new Producto ("Skipper", 85.40);
		
		CarritoCompra carrito = new CarritoCompra(); // Instanciar new CarritoCompra
		
		carrito.agregarProducto(munieca1);
		
		carrito.agregarProducto(munieca2);
		
		double totalCarrito = carrito.calcularTotal();
		
		System.out.println("Total del carrito: $ " + totalCarrito);
		

	} // Main

} // Clase
