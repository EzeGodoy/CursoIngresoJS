function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad>=18)
	{
		alert("Es mayor");
	}

	if(edad<=12)
	{
		alert("Es un niño");
	}

	if(edad>=13&&edad<=17)
	{
		alert("Es un adolescente");
	}

	//Se toma de 13 a 17 inclusives como adolescente.


}//FIN DE LA FUNCIÓN