//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var area;
	var alambre;

	ancho=parseInt(document.getElementById('ancho').value);
	largo=parseInt(document.getElementById('largo').value);

	area= ancho*largo;

	alambre= area*6;

	alert("Se van a necesitar "+alambre+" mts de alambre.");
}

