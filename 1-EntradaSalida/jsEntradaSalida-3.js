/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;

	nombre = document.getElementById('elNombre').value;
	/*La sentencia document.getElementById('').value nos permite tomar un dato del html y valuarlo. Si se coloca 
	variable=document.getElementById.value lo que se hacer es tomar ese dato y decir que la variable es igual
	al valor tomado. Si se coloca document.getElementById.value=variable aca se dice que el dato tomado va a ser lo
	que nse defina en la variable*/

	alert(nombre);


}


