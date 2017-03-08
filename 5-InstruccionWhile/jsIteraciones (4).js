function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

    while(numero<0 || numero>9) 
    {	
		numero=prompt("Error, Ingrese un numero entre 0 y 9 inclusive");
	}

	alert("Bien");

}//FIN DE LA FUNCIÓN


