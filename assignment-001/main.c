#include "include/calculator.h"
#include<stdio.h>
#include<string.h>

int MAX_SIZE=500;
void main() { 
	float result;
    char expression[MAX_SIZE];
    printf("Arithematic Calculator (Enter q to exit)\n");
    while(1)
    {
        printf(">>> ");
        scanf("%s",expression);
        if(strcmp(expression,"q")==0)
            break;
        result=evaluate(expression);
        printf(">>> %f\n",result);
    }
} 
    