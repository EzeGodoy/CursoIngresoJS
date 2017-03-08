function Mostrar()
{
//tomo el mes del año  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
	alert("Tiene 28 dias");
	break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	alert("Tiene 30 días");				
	break;

	default:
	alert("Tiene 31 dias");
	break;
}



}//FIN DE LA FUNCIÓN