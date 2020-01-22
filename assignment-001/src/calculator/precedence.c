#include "../../include/calculator.h"
int precedence(char op){ 
	if(op == '+'||op == '-') 
	return 1; 
	if(op == '*'||op == '/') 
	return 2; 
	return 0; 
} 