#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TAM 5

typedef struct
{
    int dia;
    int mes;
    int anio;
}efecha;


typedef struct
{
    int legajo;
    char nombre[20];
    float sueldo;
    char sexo;
    efecha fnac;
}epersona;

void mostrarPersona (epersona x);

int main()
{
    epersona unapersona;
    epersona gente[]={{12,"Juan", 12000, 'm',{12,5,1998}}};

    printf("Ingrese legajo: ");
    scanf("%d",& unapersona.legajo);
    printf("Ingrese nombre: ");
    fflush(stdin);
    gets(unapersona.nombre);
    printf("Ingrese sueldo: ");
    scanf("%f",& unapersona.sueldo);
    printf("Ingrese sexo: ");
    fflush(stdin);
    scanf("%c",& unapersona.sexo);
    printf("Ingrese fecha de nacimiento: dd mm aaaa: ");
    scanf("%d %d %d",&unapersona.fnac.dia,&unapersona.fnac.mes,&unapersona.fnac.anio);

    mostrarPersona(unapersona);

    mostrarPersona()

    return 0;

}

void mostrarPersona (epersona x)
{
    printf("\n\nDatos de la persona\n\n");
    printf("Legajo: %d\n", x.legajo);
    printf("Nombre: %s\n", x.nombre);
    printf("Sueldo: $%.2f\n", x.sueldo);
    printf("Sexo: %c\n", x.sexo);
    printf("Fecha Nacimiento: %02d/%02d/%d",x.fnac.dia,x.fnac.mes,x.fnac.anio);

}

void mostrarPersona() (epersona x[], int cant)
{
    for (int i=0; i<cant , i++)
    {
        printf("\n");
        mostrarPersona(x[i]);

    }

}


