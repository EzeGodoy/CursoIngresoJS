#include <stdio.h>
#include <stdlib.h>
#include <string.h>



/*
2- mostrar cada uno
3- mostrar clientes con su serie
4- por cada serie los clientes que la estan viendo
5- todos los clientes que ven TBBT (100)
6- La serie menos popular

Crear una cuarta estructura que permita relacionar un cliente con una serie, de esta manera podremos obtener una relacion
muchos a muchos (Un cliente que ve muchas series)

7- Todas las series que ven los clientes de nombre "Juan"
*/


int main()
{

    eSerie series[S];
    eCliente clientes[C];

    cargarSeries(series);
    cargarClientes(clientes);

    mostrarSeries(series, S);
    mostrarClientes(clientes, C);

    mostrarClientesConSerie(clientes, series, C,S);

    mostrarSeriesConClientes(clientes,series,C,S);

    mostrarSerieLoser(clientes, series,C,S);
    mostrarClientesTBBT(clientes, series,C,S);

    return 0;
}

