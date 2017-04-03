#include <stdio.h>
#include <stdlib.h>

int factorial (int);

int main()
{
    int num;

    num  = factorial(100);

    printf("El numero es %d", num);

    printf("Hello world!\n");
    return 0;
}

int factorial (int numero){
    int respuesta;

    if (numero==1){
        respuesta = 1;
    }
    else{
        respuesta = numero * factorial(numero - 1);
    }

    return respuesta;

}
