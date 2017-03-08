//Recuperatorio

//Ejercicio 6

function Mostrar ()
{
	var contenedores=0;
	var peso=0;
	var pesoMax;
	var pesoMin;

	while(contenedores<=50)
	{
		contenedores++

		peso=prompt("Ingrese el peso en kilogramos del contenedor");
		peso=parseInt(peso);

		if(contenedores==1)
		{
			peso=pesoMin;
			peso=pesoMax;
		}

		else if(peso<pesoMin)
		{
			peso=pesoMin;
		}

		else if(peso>pesoMax)
		{
			peso=pesoMax;
		}

		else if(contenedores==51)
		{
			alert("El contenedor mas pesado peso "+pesoMax+" kilogramos");
			alert("El contenedor menos pesado peso "+pesoMin+" kilogramos");
		}
	}
}


