// EJERCICIO 1: Imprime los números del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// EJERCICIO 2: Imprime los números pares del 2 al 20

for (let par = 2; par <= 20; par+=2) {
    console.log(par)
}

// EJERCICIO 3: Imprime los números impares del 1 al 19

for (let impar = 1; impar <= 19; impar+=2) {
    console.log(impar)
}

// EJERCICIO 4: Imprime los números del 10 al 1 en orden inverso

for (let inverso = 10; inverso >= 1; inverso-=1) {
    console.log(inverso)
}

// EJERCICIO 5: Imprime los números del 1 al 10, pero se detiene al llegar al 5

for (let five = 1; five <= 10; five++) {
    if (five === 5){
        break
    }
    console.log(five)
}

// EJERCICIO 6: Imprime los números del 1 al 10, pero salta el 5

for (let cinco = 1; cinco <= 10; cinco++){
    if (cinco === 5) {
        continue;
    }
    console.log(cinco)
}

// EJERCICIO 7: Crea una función llamada 'decirNombre(nombre) y ejecuta una alerta `"Hola " + nombre`

function decirNombre(nombre) {
    alert ("Hola " + nombre)
}

decirNombre("Ivan")
decirNombre("Julia")

// EJERCICIO 8: Crea una función llamada 'saludar(nombre)' y devuelve un string `"Hola " + nombre`, luego invoca la función en una alerta

function saludar(nombre) {
    console.log("Hola " + nombre);
    return "Hola " + nombre;
}

alert(saludar("Iván"));

// EJERCICIO 9: Crea una función llamada `sumar(a,b)`, que devuelva la suma entre a y b

function sumar(a, b) {
    return a + b;
} 

console.log(sumar(5,7));

// EJERCICIO 10: Crea una función llamada `restar(a,b)` que devuelva la resta de `a` y `b`

function restar(a,b) {
    return a - b;
}

console.log(restar(88, 91));

/* EJERCICIO 11: Crea una función llamada `calcular(operación, a, b)` que: 

-Si la operación es `"+"` o `"-"`, invoque `sumar(a,b)` o `restar(a,b)`
-Retorne el resultado
-En caso de recibir una operación no válida, devuelva `null`

*/

function calcular(operador, a, b) {
    if (operador === "+") {
        return sumar(a,b)
    } else if (operador === "-") {
        return restar(a,b)
    } else {
        return null
    }
}

console.log(calcular("+", 1, 2))
alert(calcular("+", 1, 2))

// EJERCICIO 12: Crea una función llamada `contarHasta(numero)` que cuente hasta ese número por consola

function contarHasta(numero) {
    for (let i = 0; i <= numero;  i++) {
        console.log(i);
    };
};

contarHasta(2);

/* EJERCICIO 13: Crea una calculadora interactiva:

-Pregunta al usuario si desea usar la calculadora.
-Mientras la respuesta sea `"SI"`, solicita dos números y una operación.
-Usa `calcular` para mostrar el resultado por alerta
-Si el usuario responde algo distinto a "SI", muestra `"El programa ha finalizado"`

*/

let calculadora = String(prompt("Desea usar la calculadora: ").toUpperCase());

if (calculadora === "SI") {
    let calculo = String(prompt("Ingrese signo de suma/resta (+/-): "));
    let calculoUno = Number(prompt("Ingrese el primer número: "));
    let calculoDos = Number(prompt("Ingrese el segundo número: "));
    alert(calcular(calculo, calculoUno, calculoDos));
    console.log(calcular(calculo, calculoUno, calculoDos));
} else {
    alert("El programa ha finalizado");
    console.log("El programa a finalizado");
} 

// EJERCICIO 14: Hacer un programa que imprima 25 términos de la serie `11 - 22 - 33 - 44 - 55 - 66...`

for (let i = 1; i <= 25; i++) {
    console.log(i * 11);
}

// EJERCICIO 15: Hacer un programa que permita cargar 5 números enteros e informe cuántos son pares y cuántos son pares

let pares = 0;
let impares = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("Ingresá un número entero: "));
    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert("Cantidad de pares: " + pares + "\nCantidad de impares: " + impares);

// EJERCICIO 16: Hacer un programa donde se ingresen 5 alturas de personas y mostrar la altura promedio

