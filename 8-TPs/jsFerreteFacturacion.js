/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var PrecioUno;
var PrecioDos;
var PrecioTres;
var resultado;


function Sumar () 
{

PrecioUno=document.getElementById('PrecioUno').value;
PrecioDos=document.getElementById('PrecioDos').value;
PrecioTres=document.getElementById('PrecioTres').value;

PrecioUno=parseInt(PrecioUno);
PrecioTres=parseInt(PrecioTres);
PrecioDos=parseInt(PrecioDos);

resultado=PrecioUno+PrecioDos+PrecioTres;

alert("La suma es "+resultado);
 
}


function Promedio () 
{

PrecioUno=document.getElementById('PrecioUno').value;
PrecioDos=document.getElementById('PrecioDos').value;
PrecioTres=document.getElementById('PrecioTres').value;

PrecioUno=parseInt(PrecioUno);
PrecioTres=parseInt(PrecioTres);
PrecioDos=parseInt(PrecioDos);

resultado=(PrecioUno+PrecioDos+PrecioTres)/3;

alert("El promedio es "+resultado);

}


function PrecioFinal () 
{

PrecioUno=document.getElementById('PrecioUno').value;
PrecioDos=document.getElementById('PrecioDos').value;
PrecioTres=document.getElementById('PrecioTres').value;

PrecioUno=parseInt(PrecioUno);
PrecioTres=parseInt(PrecioTres);
PrecioDos=parseInt(PrecioDos);

resultado=(PrecioUno+PrecioDos+PrecioTres)*1.21;

alert("El precio final es "+resultado);

}