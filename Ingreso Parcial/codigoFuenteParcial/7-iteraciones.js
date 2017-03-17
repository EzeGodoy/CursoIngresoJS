//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	//variables
	var contadorAlumnos;

	var nota;
	var notaMasBaja;
	var notaMasAlta;
	
	var acumuladorNotas=0;
	var varonesAprobados=0;

	var promedio;

	var sexo;

	/*Se puede ingresar con while como en la iteracion 6
	while(contadorAlumnos<6)
	{
		contadorAlumnos++
		En este caso la variable contadorAlumnos deberia igualerse a 0 cuando se 
		declara. Lo demas sigue igual.
	}
	*/

	for (contadorAlumnos=0; contadorAlumnos<6; contadorAlumnos++)
	{

		nota=parseInt(prompt("Ingrese nota:"));
		while(nota<0 || nota>10)
		{
			nota=parseInt(prompt("valor incorrecto, ingresar nota entre 0 y 10: "));
		}	


		sexo=prompt("Ingrese sexo, 'f' o 'm':");
		while(sexo!="f" && sexo!="m")
		{
			sexo=(prompt("valor incorrecto, Ingrese sexo, 'f' o 'm':"));
		}


		if (sexo=="m" && nota>=6)
		{			
			varonesAprobados++;
		}

		if (contadorAlumnos==1)
		{
			notaMasAlta=nota;
			notaMasBaja=nota;
		} 
		else
		{
			if (nota>notaMasAlta)
			{
				notaMasAlta=nota;
			} 
			else
			{
				if (notaMasBaja>nota)
				{
					notaMasBaja=nota;
				}
			}
		}

		acumuladorNotas=acumuladorNotas+nota;
	}

	// calculo del promedio
	promedio=acumuladorNotas/contadorAlumnos;
	alert("A) El promedio es:"+ promedio);

	// nota mas baja
	alert("B) La nota mas baja es:"+ notaMasBaja);

	// varones aprobados
	alert("C) Aprobaron "+varonesAprobados+" varones");
}

