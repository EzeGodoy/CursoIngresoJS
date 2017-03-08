/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;

	var numeroDos;

	var resultado;

	numeroUno=document.getElementById('numeroUno').value;

	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno); 
	/*parseInt lo que hace es que a la variable la transforme en entero, eso signifa que cuando se ingrese un valor 
	solo lo va a tomar si es un numero y en el caso de que fuese un numero lo pasa a entero. Por ejemplo en el 
	ejercicio anterior la variable edad se le podia transformar a entero con parseInt para que solo tomara
	a los numeros en esa variable*/

	numeroDos=parseInt(numeroDos);

	resultado=numeroDos+numeroUno; 
	/*Para sumar valores se debe crear una nueva variable que sume los resultados, no se pueden sumar
	directo en el alert*/

	alert("La suma es "+resultado);
}

