#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numeros[10];
    int numerosX2[10];
    //int i = 0;

    for(int i=0;i<10;i++){
        printf("Ingrese un numero:");
        scanf("%d", &numeros[i]);

        numerosX2[i] = numeros[i] * 2;
    }

    for (int i=0;i<10;i++){
        printf(" %d ", numeros[i]);
    }

    printf("\n");

    for (int i = 0; i<10; i++){
        printf(" %d ", numerosX2[i]);
    }

    //printf("Hello world!\n");
    return 0;
}
