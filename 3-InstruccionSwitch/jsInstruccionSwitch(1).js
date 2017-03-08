function Mostrar()
{
//tomo el mes del año  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":
	alert("Que comiences bien el año");
	break;

	case "Marzo":
	alert("A clases");
	break;

	case "Julio":
	alert("Se vienen las vaciones");
	break;

	case "Diciembre":
	alert("Felices fiestas");
	break;

}


/* Se utiliza para agilizar la toma de decisiones múltiples; trabaja de la misma manera
que lo harían sucesivos if, if else o until anidados. 
 
 switch(variable)  Aca se cloca la funcion y la variable a trabajar en switch
 {
 
  case "Texto":    Aca siempre van entre comillas los texto o sin comillas los numeros
  case "Texto2":   y al final va el dos puntos:
  
  alert("TEXTO")   Aca lo que se muestra en caso de que se cumplan los case (casos)

  break;           Esto corta estos case por lo que se puede comenzar mas case abajo

  default: 		   El default sirve como en else en el If, muestra lo que pasa si no se 
    			   cumple ningun case
  
  alert("TEXTO 2")             
 
 break;

 }
 */


}//FIN DE LA FUNCIÓN