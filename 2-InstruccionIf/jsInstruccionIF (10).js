function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor((Math.random() *10) + 1);
	
	if(nota<=10&&nota>=9)
	{
		alert("Exelente");
	}
 
 	if(nota>=4 && nota<=8)
 	{
 		alert("Aprobado")
 	}

 	if(nota<=3 && nota>=1)
 	{
 		alert("Vamos, la proxima se puede");
 	}
}//FIN DE LA FUNCIÓN