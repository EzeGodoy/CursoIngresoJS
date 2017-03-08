/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;	

	nombre = prompt("¿Cual es su nombre?"); /*Aca nos a mostrar un cuadro de texto en el cual nos va a aparecer el
	mensaje "¿Cual es su nombre?" y nos va a permitir escribir algo, lo que se escribi por ejemplo aca un nombre dado
	que es lo que se pide quedad guardado en la variable nombre dado que se coloco nombre=prompt por lo que se
	escriba aca es igual a la variable.*/


	/*La funcion prompt lo que hace es mostrarnos un cudaro de texto en el cual
	podemos escibir algo, eso lo toma la maquina y lo guarda en la variable definida en el prompt. Por ejemplo la 
	variable nombre va a guardar los nombres que se vayan escribiendo en el cuandro de texto de esta forma la variable
	obtiene varios valores sin necesidad de escribir varias variables.*/ 

	alert("Su nombre es "+nombre); // El signo mas en el dialogo lo que hace es concatenar el texto con otras cosas


}


	