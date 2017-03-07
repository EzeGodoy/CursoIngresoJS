/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadDeLamparas;
	var precioDescuento;
	var Marca;
	var ingresosBrutos;
	var precioConRecargo;

	cantidadDeLamparas=document.getElementById('Cantidad').value;

	Marca=document.getElementById('Marca').value;

	 
	 if(cantidadDeLamparas>=6)
	 {
	 	precioDescuento=(cantidadDeLamparas*35)*0.50;

	 	document.getElementById('precioDescuento').value=precioDescuento;
	 }

	 if(cantidadDeLamparas==5)
	 {
	 	switch(Marca)
	 	{
	 		case "ArgentinaLuz":
	 		precioDescuento=(5*35)*0.40;
	 		document.getElementById('precioDescuento').value=precioDescuento;
	 		break;

	 		default:
			precioDescuento=(5*35)*0.30;
			document.getElementById('precioDescuento').value=precioDescuento;
			break; 
	 	}
	 }

	 if(cantidadDeLamparas==4)
	 {
	 	switch(Marca)
	 	{
	 		case "ArgentinaLuz":
	 		case "FelipeLamparas":
	 		precioDescuento=(4*35)*0.25;
	 		document.getElementById('precioDescuento').value=precioDescuento;
	 		break;

	 		default:
	 		precioDescuento=(4*35)*0.20;
	 		document.getElementById('precioDescuento').value=precioDescuento;
	 		break;
	 	}
	 }

	 if(cantidadDeLamparas==3)
	 {
	 	switch(Marca)
	 	{
	 		case "ArgentinaLuz":
	 		precioDescuento=(3*35)*0.15;
	 		document.getElementById('precioDescuento').value=precioDescuento;
	 		break;

	 		case "FelipeLamparas":
	 		precioDescuento=(3*35)*0.10;
	 		document.getElementById('precioDescuento').value=precioDescuento;
	 		break;

	 		default:
	 		precioDescuento=(3*35)*0.05;
	 		document.getElementById('precioDescuento').value=precioDescuento;
	 		break;
	 	}
	 }

	 if(cantidadDeLamparas==1||cantidadDeLamparas==2)
	 {
	 	precioDescuento=cantidadDeLamparas*35;
	 	document.getElementById('precioDescuento').value=precioDescuento;
	 	
	 }

	 if(precioDescuento>120)
	 {
	 	precioConRecargo=precioDescuento*1.10;
	 	document.getElementById('precioDescuento').value=precioConRecargo;
	 	ingresosBrutos=precioConRecargo-precioDescuento;
	 	ingresosBrutos=parseInt(ingresosBrutos);
	 	alert("”Usted pago "+ingresosBrutos+" de IIBB");
	 }






}
