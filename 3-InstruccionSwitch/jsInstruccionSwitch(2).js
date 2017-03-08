function Mostrar()
{
//tomo el mes del año  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert("Falta para el invierno");
	break;

	case "Julio":
	case "Agosto":
	alert("Estamos en invierno");
	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Dieciembre":
	alert("Ya paso el invierno, ahora calor!!!!");
	break;

	/*Aca se observan varios cases juntos a diferencia del otro que estaban
	separados dado que cada case valia algo distinto.   */
}





}//FIN DE LA FUNCIÓN