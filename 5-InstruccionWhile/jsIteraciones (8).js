function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		contador++
		numero=parseInt(prompt("ingrese un numero"));
		
		if (numero>0)
		{
			positivo=positivo+numero;
		}
		else if(numero<0)
		{
			negativo=negativo*numero;
		}
		else
		{
			alert("¿Eso acaso es un numero?")
		}
		
		respuesta=prompt("¿Quiere continuar?");
	}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN