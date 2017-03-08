function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var n_max=0;
	var n_min=0;
	var numero;



	while(respuesta!='no')
	{
		contador++
		numero= parseInt(prompt('Ingrese un numero'));
		if (numero<n_min)
		{
			n_min=numero;
		}
		else if (numero>n_max)
		{
			n_max=numero;
		}
	    respuesta=prompt("¿Quiere continuar?");
	}

document.getElementById('maximo').value=n_max;
document.getElementById('minimo').value=n_min;




}//FIN DE LA FUNCIÓN