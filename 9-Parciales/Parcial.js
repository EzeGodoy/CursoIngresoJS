//Parcial

//Ejercicio 1

function Mostrar ()
{
	var base;
	var perimetro;

	base=document.getElementById('Base').value;

	perimetro=base*4;

	alert("El perimetro es "+perimetro);
}

//Ejercicio 2

function Mostrar ()
{

	var importe;
	var valorFinal;

	importe=prompt("Ingrese valor del producto");

	importe=parseInt(importe);

	valorFinal=importe*1.21;

	alert("El valor final mas IVA es "+valorFinal);
}

//Ejercicio 3

function Mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	resultado=(largo*ancho)*3;

	alert("Se necesitan "+resultado+" mts de alambre");
}

//Ejercicio 4

function Mostrar ()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese un numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		document.write("La multiplicacion da "+resultado+"<br>");
	}

	else if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
		document.write("La diferencia es "+resultado+"<br>");
	}

	else if(numeroUno<numeroDos)
	{
		resultado=numeroUno+numeroDos;
		document.write("La suma es "+resultado+"<br>");
	}
}

//Ejercicio 5

function Mostrar ()
{	
	var dia;

	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
	{
		case "Sabado":
		case "Domingo":
		alert("Es fin de samana");
		break;

		default:
		alert("A trabajar!!!");
	}
}

//Ejercicio 6

function Mostrar ()
{
 	var importeVentas=0;
 	var dia=0;
 	var importeMax;
 	var importeMin;

 	while(dia<=24)
 	{
 		dia++;
 		importeVentas=prompt("Ingrese un importe");


 	if(dia==1)
 		{
 			importeVentas=importeMin;
 			importeVentas=importeMax;
 		}

 	else if(importeVentas<importeMin)
	 	{
	 		importeVentas=importeMin;
	 	}

 	else if(importeVentas>importeMax)
	 	{
	 		importeVentas=importeMax;
	 	}

	else if(dia==25)
		{
			alert("El importe maximo fue "+importeMax);
			alert("El importe minimo fue "+importeMin);
		}
	}
}

//Ejercicio 7

function Mostrar ()
{
	
	var alumnos=0;
	var nota;
	var acumuladorNotas=0;
	var promedioNotas;
	var sexo;
	var sexoMujeres=0;
	var sexoHombres=0;
	var notaMaxima;
	var notaMinima;
	var varonesConSeis=0;

	while(alumnos<=100)
	{
		alumnos++
		
		nota=prompt("Ingrese una nota");
		
		while(nota<=0 || nota>=11)
		{
			
			nota=prompt("Ingrese una nota entre 1 y 10 inclusive");
		
		}
			
		if(nota>=1 || nota<=10)
		{
			acumuladorNotas=acumuladorNotas+nota;

			nota=notaMaxima;
			nota=notaMinima;

			if(nota<notaMinima)
			{
				nota=notaMinima;
			}

			else if(nota>notaMaxima)
			{
				nota=notaMaxima;
			}
		}
		
		sexo=prompt("Ingrese su sexo f ó m")
		
		while(sexo!='f' && sexo!='m')
		{
			sexo=prompt("Sexo incorrecto, ingrese f ó m")
		}

		if(sexo=='f')
		{
			sexoMujeres=sexoMujeres+sexo;
		}

		if (sexo=='m')
		{
			sexoHombres=sexoHombres+sexo;
		}

		if(sexo=='m' && nota==6)
		{
			varonesConSeis++
		}	
	}


promedioNotas=acumuladorNotas/alumnos;
alert("El promedio de las notas es "+promedioNotas);
alert("La nota mas baja fue "+notaMinima);
alert("Hat en total "+varonesConSeis+" varones que sacaron 6");
}