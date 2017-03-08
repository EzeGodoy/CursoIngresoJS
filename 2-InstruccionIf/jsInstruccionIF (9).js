function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom = Math.floor((Math.random() * 10) + 1);
		
	alert(numeroRandom);


	/*La funcon Math.floor((Math.random() * X) + P); lo que hace es generar numeros 
	randon segun los valores que se les asignen a X y a P. Aca se debe asignar una 
	valor a la X para saber hasta el numero el cual se puede llegar. Por ejemplo si 
	es *10 se va a llegar hasta el 10 abarcando todos los numeros desde P hasta 10.
	Si fuese el numero 256 seria desde P hasta 256. Y en P se coloca desde donde comienza,
	por ejemplo P=5 y X=356 va a abarcar los numeros desde 5 hasta 356 inclusive.  */


}//FIN DE LA FUNCIÓN