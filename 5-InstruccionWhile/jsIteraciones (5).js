function Mostrar()
{

var sexo = prompt("ingrese Femenino ó Masculino");

while(sexo!='Femenino' && sexo!='Masculino')
{
	alert("Incorrecto");
	sexo=prompt("Ingrese Femenino o Masculino");
	
}

document.getElementById('Sexo').value=sexo;
alert("Sexo "+sexo);


}//FIN DE LA FUNCIÓN