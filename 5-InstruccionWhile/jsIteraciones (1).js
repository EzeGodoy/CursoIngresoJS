function Mostrar()
{
	
var contador=0

while(contador<10)
{
	contador++;

	//alert(contador);

	document.write("numero "+contador+"<br>");
}

/*var contador=0          Al colocar = 0 se inicializa el contador, se puede iniciar en cero
                          o en el valor que uno quiera

while(contador<10)      La sentencia while es parecida al If, la unica diferencia es que si la 
						condicion es verdadera vuelve a ejecutar el bloc otra vez a diferencia 
						del If que pasaba a la siguinete sentencia. 
						
{
	contador++;         Si no se coloca el contador ++, que el ++ seria como decir +1 (se puede
						poner contador+n°); la funcion se vuelve a repetir infinitamente ya que
						la condicon dice que si el contador es menor a 10 se vuelva a ejecutar
						y como el contador nunca se suma y siempre es igual a 0 la sentencia 
						while se va a ejecutar inefinidamente. Se puede escribir tambien 
						contador=contador+n°.

	//alert(contador);  De esta forma va  a mostrar los numeros del 1 al 10 en forma de alerta
						y habra que poner aceptar a cada numero

	document.write("numero "+contador+"<br>");      Aca nos va a mostrar en una hoja en blanco 
													los numeros del 1 al 10.
}

*/

}//FIN DE LA FUNCIÓN