function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;


	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;


	if(edad<=17&&estadoCivil!="Soltero")
	{
		alert("Es muy chico para No ser Soltero");
	}


	/*Aca no se crea una variable para soltero dado que es tomado del id de estado Civil
	por lo que Soltero va entre comillas "Soltero". */


}//FIN DE LA FUNCIÓN