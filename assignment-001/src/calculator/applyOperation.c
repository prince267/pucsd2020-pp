#include "../../include/calculator.h"
#include "../../include/arithmetic.h"

float applyOperation(float a, float b, char op){ 
	switch(op){ 
		case '+': return addition(a,b); 
		case '-': return substraction(a,b); 
		case '*': return multiplication(a,b); 
		case '/': return division(a,b); 
	} 
} 