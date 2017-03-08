function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<13 || edad>17)
	{
		alert("No es adolecente");
	}

/*Tenes una condicion logica en la cual si te pide un numero x y pedis que se cumpla 
que se mayor que 12 y menor que 18 cin la funcion y && nunca se va a cumplir. Por ejemplo 
el numero 85 si bien es mayor que 18 no es menor que 13. Por lo que se tiene que usar la 
funcion ó que es ||. */





}//FIN DE LA FUNCIÓN