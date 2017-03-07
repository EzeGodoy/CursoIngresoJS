/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*100)+1;
	numeroSecreto=parseInt(numeroSecreto);
}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	
		if(numeroIngresado<numeroSecreto)
		{
			alert("Falta un poco");
			contadorIntentos++
			document.getElementById('intentos').value=contadorIntentos;
		}

		else if(numeroIngresado>numeroSecreto)
		{
			alert("Te pasaste");
			contadorIntentos++
			document.getElementById('intentos').value=contadorIntentos;
		}

		else if(numeroIngresado==numeroSecreto)
		{
			
			if(contadorIntentos==1)
			{
				alert("Usted es un Psíquico”");
			}
		
			if(contadorIntentos==2)
			{
				alert("Esto es suerte");
			}

			if(contadorIntentos==3)
			{
				alert("Exelente Tecnica");
			}

			if(contadorIntentos==4)
			{
				alert("Usted está en la media");
			}

			if(contadorIntentos>=6&&contadorIntentos<=10)
			{
				alert("Falta Tecnica");
			}

			if(contadorIntentos>10)
			{
				alert("Afortunado en el amor!!")
			}
		
		}
	
}

/*
var numeroIngresado;
var numeroSecreto; 
var contadorIntentos=0;


function comenzar()
{

	contadorIntentos=0;
	numeroIngresado=0;
	document.getElementById('numero').value=numeroIngresado;
	document.getElementById('intentos').value=contadorIntentos+' intentos';
	numeroSecreto= Math.floor((Math.random()*100)+1);
	alert('Ingrese un número, a ver si le aciertas!')
}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	contadorIntentos=parseInt(contadorIntentos)+1;
	
	if(numeroIngresado>numeroSecreto)
	{
		alert('Se pasó');
	}
	else if(numeroIngresado<numeroSecreto)
	{
		alert('Le faltó');
	}
	else if(numeroIngresado==numeroSecreto)
	{
		switch(contadorIntentos)
		{
			case 1:
				alert('Usted es un psíquico. Lo hizo en '+contadorIntentos+' intentos.');
			break;
		
			case 2:
				alert('Excelente percepción. Lo hizo en '+contadorIntentos+' intentos.');
			break;
		
			case 3:
				alert('Esto es suerte. Lo hizo en '+contadorIntentos+' intentos.');
			break;

			case 4:
				alert('Esto es suerte. Lo hizo en '+contadorIntentos+' intentos.');
			break;

			case 5:
				alert('Usted está en la media. Lo hizo en '+contadorIntentos+' intentos.');
			break;

			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert('Falta técnica. Lo hizo en '+contadorIntentos+' intentos.');
			break;
			default:
				alert('Afortunado en el amor. Lo hizo en '+contadorIntentos+' intentos.')

		}
	}

document.getElementById('numero').value=numeroIngresado;
document.getElementById('intentos').value=contadorIntentos+' intentos';
}

*/