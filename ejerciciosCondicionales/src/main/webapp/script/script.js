var edad = Number(prompt("Introduzca su edad: "));
if(edad<1||edad>100)
	alert("La edad debe de estar entre 1 y 100")
	
else{
	if(edad>=18){
		alert("Tienes permiso para acceder")
		var categoria = prompt("Camisetas\nPantalones\nRopa Interior\nChaquetones\nIntroduzca la categoria de la ropa: ");
		var precio = Number(prompt("Introduzca el precio de la prenda: "));
		var descuento;
		switch(categoria){
			case "Camisetas":
				descuento=precio*0.05;
				break;
			case "Pantalones":
				descuento=precio*.1;
				break;
			case "Ropa Interior":
				descuento=precio*0;
				break;
			case "Chaquetones":
				descuento=precio*0.5;
				break;
			default:
				descuento=precio*0.02;
				break;
		}
		precio=Number((precio-descuento).toFixed(2));
		alert("El precio de la prenda es : "+precio);
		}
	else
		alert("No tienes permiso para acceder")
}
