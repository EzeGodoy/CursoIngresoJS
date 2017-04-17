#include <stdio.h>
#include <stdlib.h>

int main()
{
    char nombre[20];
    char apellido[30];
    char nomape[51];



    printf("Ingrese un nombre: ");
    fflush(stdin);
    gets(nombre);

    printf("Ingrese un apellido: ");
    fflush(stdin);
    gets(apellido);

    strcopy(nomape;apellido);

    strcat(nomape,", ");

    strcat(nomape,nombre);

    nomape[0]=toupper(nomape[0]);

    for(i=0;nomape[i]!='\0';i++)
    {       //i<51                (opcion B)
            //i<strlen(nomape)    (opcion C)

        if(nomape[i]==' ')
        {
            nomape[i+1]=toupper(nomape[i+1]);
        }
    }







}
