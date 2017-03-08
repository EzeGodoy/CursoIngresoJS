function Mostrar()
{

	var contador=0;  
	var acumulador=0;
	var numero;

	while(contador<5)   //Se trabaja con el contador++ hasta <5
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero")); //Se pide numero las 5 veces
		acumulador=acumulador+numero; //La suma del acumulador es el acumulador mas
									  //el numero que se va escribiendo

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; //El promedio del acumulador va afuera 
														//del while

}//FIN DE LA FUNCIÓN