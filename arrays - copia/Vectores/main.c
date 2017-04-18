#include <stdio.h>
#include <stdlib.h>
#define A 3

/** \brief
 *
 * \param
 * \param
 * \return
 *
 */


int main()
{

    //tipo_dato identificador[A];

    int edades[A]= {0}, legajos[A], estados[A]= {0}, auxEdad, pos, flagMaximo = 0, maxProm, auxLeg,  flagEncontro=0, opcion;
    float promedios[A], promedio, suma=0, auxFloat;
    char nombres[A][50];
    int i, flag;
    char seguir='s', respuesta;

    /*for(i=0; i<8; i++)
    {
        edades[i] = 0;
    }*/

    do
    {
        printf("1. Ingreso de datos\n2.Busqueda por legajo\n3.maximo\n4.listar por promedio\n5. Listar todos\n6. Bajas\n7.Modificaciones\n8.Ordenar\n9.salir\n");
        scanf("%d", &opcion);
        switch(opcion)
        {
        case 1:
            flag=0;
            for(i=0; i<A; i++)
            {
                if(estados[i]==0)
                {
                    printf("Ingrese legajo: ");
                    scanf("%d", &legajos[i]);
                    printf("Ingrese nombre: ");
                    fflush(stdin);
                    gets(nombres[i]);
                    printf("Ingrese una edad: ");
                    scanf("%d", &edades[i]);
                    printf("Ingrese promedio: ");
                    scanf("%f", &promedios[i]);
                    flag=1;
                    estados[i] = 1;
                    break;
                }

            }
            if(flag==0)
            {
                printf("Capacidad agotada!!!");
            }
            break;
        case 2:
            printf("Ingrese legajo a buscar: ");
            scanf("%d", &auxLeg);


            for(i=0; i<A; i++)
            {
                if(legajos[i]==auxLeg)
                {
                    printf("%d\t%d\t%f\n",legajos[i], edades[i], promedios[i]);
                    flagEncontro=1;
                    break;
                }


            }
            if(flagEncontro==0)
            {
                printf("Legajo inexistente");
            }
            flagEncontro=0;
            break;
        case 3:
            for(i=0; i<A; i++)
            {
                if(flagMaximo ==0 || promedios[i]>maxProm)
                {
                    maxProm = promedios[i];
                    flagMaximo = 1;
                }
            }
            for(i=0; i<A; i++)
            {
                if(promedios[i]==maxProm)
                {
                    printf("%d\t%d\t%f\n",legajos[i], edades[i], promedios[i]);
                }
            }
            break;

        case 4:

            for(i=0; i<A; i++)
            {
                suma+=promedios[i];
            }
            promedio = suma/A;
            printf("Promedio superior al promedio general\n");
            for(i=0; i<A; i++)
            {
                if(promedios[i]>promedio)
                {
                    printf("%d\t%d\t%f\n",legajos[i], edades[i], promedios[i]);
                }
            }
            suma=0;
            break;
        case 5:
            for(i=0; i<A; i++)
            {
                if(estados[i]==1)
                printf("%d\t%d\t%f\n",legajos[i], edades[i], promedios[i]);

            }
            break;
        case 6:

             printf("Ingrese legajo a buscar: ");
            scanf("%d", &auxLeg);


            for(i=0; i<A; i++)
            {
                if(legajos[i]==auxLeg)
                {
                    printf("%d\t%d\t%f\n",legajos[i], edades[i], promedios[i]);

                    printf("Esta seguro de eliminar? : ");
                    respuesta = getche();
                    if(respuesta=='s')
                    {
                        estados[i] = 0;
                    }
                    else
                    {
                        printf("Accion cancelada por el usuario!");
                    }
                    flagEncontro=1;
                    break;
                }


            }
            if(flagEncontro==0)
            {
                printf("Legajo inexistente");
            }
            flagEncontro=0;
            break;
        case 7:

             printf("Ingrese legajo a buscar: ");
            scanf("%d", &auxLeg);


            for(i=0; i<A; i++)
            {
                if(legajos[i]==auxLeg)
                {
                    printf("%d\t%d\t%f\n",legajos[i], edades[i], promedios[i]);
                    printf("Ingrese el nuevo promedio: ");
                    scanf("%f", &auxFloat);
                    printf("Esta seguro de modificar? : ");
                    respuesta = getche();
                    if(respuesta=='s')
                    {
                        promedios[i] = auxFloat;
                    }
                    else
                    {
                        printf("Accion cancelada por el usuario!");
                    }
                    flagEncontro=1;
                    break;
                }


            }
            if(flagEncontro==0)
            {
                printf("Legajo inexistente");
            }
            flagEncontro=0;
            break;

        case 9:
            seguir='n';
            break;




        }
        system("pause");
        system("cls");

    }
    while(seguir=='s');





    //Carga Secuencial








    /*





    printf("\n alumnos con el maximo");


    */


    return 0;
}


/*do
    {
        printf("Ingrese la posicion: 1-8");
        scanf("%d", &pos);
        while(pos>8 || pos<1)
        {
            printf("reingrese la posicion: 1-8");
            scanf("%d", &pos);
        }
        printf("Ingrese edad: ");
        scanf("%d", &edades[pos-1]);


        /*printf("Ingrese edad: ");
         scanf("%d", &auxEdad);
         printf("Ingrese la posicion: 1-8");
         scanf("%d", &pos);
         edades[pos-1] = auxEdad;

        printf("Desea continuar? s/n");
        seguir = getche();

    }
    while(seguir=='s');
*/





/* edades[4]=8;
    edades[7]=10;
    edades[0]=5;
    printf("0 - %d\n", edades[0]);
    printf("4 - %d\n", edades[4]);
    printf("7 - %d\n", edades[7]);*/
