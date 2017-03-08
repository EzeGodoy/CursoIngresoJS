function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si'; //Esto se llama bandera, es una variable fija
 	var numero;

 	while(respuesta=='si') //Aca la vedad para seguir seria poner si, recordad que la variable 
 		             //ya esta fijada en si como bandera
 	{
 		contador++
 		numero=parseInt(prompt("Ingrese un numero"));
 		acumulador=acumulador+numero;
 		respuesta=prompt("¿Desea seguir?");
 	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador; //Aca el promedio se saca
//acumulador/contador dado que el contador va a ser la cantidad de veces que se ingreso un 
//numero

}//FIN DE LA FUNCIÓN 