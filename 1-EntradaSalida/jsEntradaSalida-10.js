/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;

	importe=document.getElementById('importe').value;

	importe=parseInt(importe);

	resultado=importe*0.25;
	/*Para descuento se multiplica 0.25 y para aumento se multiplica 1.25*/

	resultado=parseInt(resultado);

	document.getElementById('resultado').value=resultado;
}
