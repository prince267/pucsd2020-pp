build:
		gcc main.c ./src/arithematicOperations/addition.c ./src/arithematicOperations/substraction.c ./src/arithematicOperations/division.c ./src/arithematicOperations/multiplication.c ./src/calculator/applyOperation.c ./src/calculator/evaluate.c ./src/calculator/precedence.c ./src/calculator/validateExpression.c -o calculator 

build-static: 
			gcc -c src/arithematicOperations/*.c src/calculator/*.c
			ar -crs staticLibrary.a *.o
			rm *.o
			gcc main.c staticLibrary.a -o calculator

build-shared:
			gcc -fPIC -c src/arithematicOperations/*.c src/calculator/*.c
			gcc -shared -Wl,-soname,sharedLibrary.so -o sharedLibrary.so *.o
			export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH
			rm *.o
			gcc main.c sharedLibrary.so -o calculator
run:
		./calculator

clean: 
		rm calculator
