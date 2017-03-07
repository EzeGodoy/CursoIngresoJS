/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var ancho;
var largo;
var resultado;
var radio;



function Rectangulo () 
{
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	resultado=(largo*ancho)*3;

	alert("Se necesitan "+resultado+" mts de alambre");

}

function Circulo () 
{
	radio=document.getElementById('Radio').value;

	radio=parseInt(radio);

	resultado=(3.14*radio*2)*3;

	alert("Se necesitan "+resultado+" mts de alambre");

}

function Materiales () 
{
	var cal;
	var cemento;
	var superficie;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	superficie=largo*ancho;

	cal=superficie*3;
	cemento=superficie*2;

	alert("Se necesitan para construir "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");	

}