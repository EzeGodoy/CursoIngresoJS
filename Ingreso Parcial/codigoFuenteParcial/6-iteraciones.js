//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*function Mostrar()
{
	var importe;
	var importeMinimo;
	var importeMaximo;
	var dia;
	var contador=0;

	for (dia=0; dia<7; dia++) 
	{
		importe=parseInt(prompt("Ingrese importe: "));
		while(importe<0)
		{
			importe=parseInt(prompt("Valor incorrecto, Ingresar importe mayor a cero: "));
		}

		contador++;

		if (contador==1)
		{
			importeMaximo=importe;
			importeMinimo=importe;
		} 
		else
		{
			if (importe>importeMaximo)
			{
				importeMaximo=importe;
			} 
			else
			{
				if (importeMinimo>importe)
				{
					importeMinimo=importe;
				}
			}
		}
	}

		alert("El importe maximo es: "+importeMaximo);
		alert("El importe minimo es: "+importeMinimo);
}
*/

//La forma de arriba esta echo con for la de abajo solo con while, ambas son correctas.

function Mostrar ()
{
	var contadorDias=0;
	var importe;
	var importeMinimo;
	var importeMaximo;

while(contadorDias<7)
{
	contadorDias++

	importe=parseInt(prompt("Ingrese el importe de las ventas"));

	if(contadorDias==1)
	{
		importeMinimo=importe;

		importeMaximo=importe;
	}

	else if(importe<importeMinimo)
	{
		importeMinimo=importe;
	}

	else if(importe>importeMaximo)
	{
		importeMaximo=importe;
	}
}

	alert("El mayor importe fue "+importeMaximo);

	alert("El menor importe fue "+importeMinimo);
}