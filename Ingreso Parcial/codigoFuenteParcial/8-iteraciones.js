function Mostrar ()
{
	var respuesta="Si";
	var numero;
	var contadorNumeroPar=0;
	var promedioNumero;
	var numeroMinimo;
	var numeroMaximo;
	var acumuladorNumeros=0;
	var contador=0;
	
	while(respuesta!="no")
	{
		numero=parseInt(prompt("Ingrese un numero positivo"));

		while(numero<0)
		{
			numero=parseInt(prompt("Numero incorrecto ingrese un numero positivo"));
		}

		contador++

		acumuladorNumeros=acumuladorNumeros+numero;
		
		if(numero%2==0)
		{
			contadorNumeroPar++
		}

		if(contador==1)
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
		}
		
		else if(numero<numeroMinimo)
		{
			numeroMinimo=numero;
		}

		else if(numero>numeroMaximo)
		{
			numeroMaximo=numero;
		}

		respuesta=prompt("Desea continuar, ingrese no para salir");
	}
	
		promedioNumero=acumuladorNumeros/contador;

		document.write("La cantidad de numeros pares es "+contadorNumeroPar+"<br>");
		document.write("El promedio de los numeros ingresados es "+promedioNumero+"<br>");
		document.write("La suma de todos los numeros es "+acumuladorNumeros+"<br>");
		document.write("El numero maximo es "+numeroMaximo+"<br>");
		document.write("El numero minimo es "+numeroMinimo+"<br>");
}
