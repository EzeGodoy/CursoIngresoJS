function Mostrar()
{

var clave = prompt("Ingrese la clave");

while(clave!="utn750")
{
	alert("Clave Incorrecta");
	clave=prompt("Ingrese la clave");
}

alert("Bienvenido");
/*En while lo que se lee es la condicion. Por ejemplo 
while(variable=285) si los datos que se ingresan en la variable no son 285 se va a segir
estando en el while, asi hasta que se ingrese la variable 285. Ya que al cumplir la 
condicion de verdad se sale de la sentncia while. Con datos falsos se sigue en el while   */


}//FIN DE LA FUNCIÓN
