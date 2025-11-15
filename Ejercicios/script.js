// EJERCICIO 1: Imprime los números del 1 al 10

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

// EJERCICIO 2: Imprime los números pares del 2 al 20

/* for (let par = 2; par <= 20; par+=2) {
    console.log(par)
} */

// EJERCICIO 3: Imprime los números impares del 1 al 19

/* for (let impar = 1; impar <= 19; impar+=2) {
    console.log(impar)
} */

// EJERCICIO 4: Imprime los números del 10 al 1 en orden inverso

/* for (let inverso = 10; inverso >= 1; inverso-=1) {
    console.log(inverso)
} */

// EJERCICIO 5: Imprime los números del 1 al 10, pero se detiene al llegar al 5

/* for (let five = 1; five <= 10; five++) {
    if (five === 5){
        break
    }
    console.log(five)
} */

// EJERCICIO 6: Imprime los números del 1 al 10, pero salta el 5

/* for (let cinco = 1; cinco <= 10; cinco++){
    if (cinco === 5) {
        continue;
    }
    console.log(cinco)
}
 */
// EJERCICIO 7: Crea una función llamada 'decirNombre(nombre) y ejecuta una alerta `"Hola " + nombre`

/* function decirNombre(nombre) {
    alert ("Hola " + nombre)
}

decirNombre("Ivan")
decirNombre("Julia") */

// EJERCICIO 8: Crea una función llamada 'saludar(nombre)' y devuelve un string `"Hola " + nombre`, luego invoca la función en una alerta

/* function saludar(nombre) {
    console.log("Hola " + nombre);
    return "Hola " + nombre;
}

alert(saludar("Iván")); */

// EJERCICIO 9: Crea una función llamada `sumar(a,b)`, que devuelva la suma entre a y b

/* function sumar(a, b) {
    return a + b;
} 

console.log(sumar(5,7)); */

// EJERCICIO 10: Crea una función llamada `restar(a,b)` que devuelva la resta de `a` y `b`

/* function restar(a,b) {
    return a - b;
}

console.log(restar(88, 91)); */

/* EJERCICIO 11: Crea una función llamada `calcular(operación, a, b)` que: 

-Si la operación es `"+"` o `"-"`, invoque `sumar(a,b)` o `restar(a,b)`
-Retorne el resultado
-En caso de recibir una operación no válida, devuelva `null`

*/

/* function calcular(operador, a, b) {
    if (operador === "+") {
        return sumar(a,b)
    } else if (operador === "-") {
        return restar(a,b)
    } else {
        return null
    }
}

console.log(calcular("+", 1, 2))
alert(calcular("+", 1, 2)) */

// EJERCICIO 12: Crea una función llamada `contarHasta(numero)` que cuente hasta ese número por consola

/* function contarHasta(numero) {
    for (let i = 0; i <= numero;  i++) {
        console.log(i);
    };
};

contarHasta(2); */

/* EJERCICIO 13: Crea una calculadora interactiva:

-Pregunta al usuario si desea usar la calculadora.
-Mientras la respuesta sea `"SI"`, solicita dos números y una operación.
-Usa `calcular` para mostrar el resultado por alerta
-Si el usuario responde algo distinto a "SI", muestra `"El programa ha finalizado"`

*/

/* 

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
 */
// EJERCICIO 14: Hacer un programa que imprima 25 términos de la serie `11 - 22 - 33 - 44 - 55 - 66...`

/* 
for (let i = 1; i <= 25; i++) {
    console.log(i * 11);
} 
*/

// EJERCICIO 15: Hacer un programa que permita cargar 5 números enteros e informe cuántos son pares y cuántos son pares

/* 
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
*/

// EJERCICIO 16: Hacer un programa donde se ingresen 5 alturas de personas y mostrar la altura promedio

/* let personas = Number(prompt("Ingrese el número de personas: "));
let suma = 0

for(let p = 1; p <= personas; p++){
    let altura = parseInt(prompt("Ingrese la altura de la persona "+p+" en centimetros: "));
    suma += altura;
}

let promedio = suma / personas;
console.log("La altura promedio de las " + personas + " es: " + promedio);
alert("La altura promedio de las " + personas + " es: " + promedio); */

/* EJERCICIO 17: Se cuenta con la siguiente información:

- 5 estudiantes del turno mañana
- 6 estudiantes del turno tarde
- 11 estudiantes del turno noche

Las edades deben ingresarse por teclado.

a) Obtener el promedio de cada turno
b) Imprimir los tres promedios
c) Indicar cual turno tiene el promedio mayor

*/

/* let turnoMañana = 5;
let turnoTarde = 6;
let turnoNoche = 11;
let sumaMañana = 0;
let sumaTarde = 0;
let sumaNoche = 0;

alert("Estudiantes del turno mañana")
for(let m = 1; m <= turnoMañana; m++){
    let edadMañana = parseInt(prompt("Ingrese edad en años: "));
    sumaMañana += edadMañana;
}
let promedioMañana = sumaMañana / turnoMañana;

alert("Estudiantes del turno tarde")
for(let t = 1; t <= turnoTarde; t++){
    let edadTarde = parseInt(prompt("Ingrese edad en años: "));
    sumaTarde += edadTarde;
}
let promedioTarde = sumaTarde / turnoTarde;

alert("Estudiantes del turno noche")
for(let n = 1; n <= turnoNoche; n++){
    let edadNoche = parseInt(prompt("Ingrese edad en años: "));
    sumaNoche += edadNoche;
}
let promedioNoche = sumaNoche / turnoNoche;

console.log("Los "+turnoMañana+" estudiantes del turno mañana tienen un promedio de: "+promedioMañana+" años.");
console.log("Los "+turnoTarde+" estudiantes del turno mañana tienen un promedio de: "+promedioTarde+" años.");
console.log("Los "+turnoNoche+" estudiantes del turno mañana tienen un promedio de: "+promedioNoche+" años.");

if (promedioMañana > promedioTarde && promedioMañana > promedioNoche){
    console.log("El promedio mayor es del turno mañana.");
} else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche){
    console.log("El promedio mayor es del turno tarde.")
} else{
    console.log("El promedio mayor es del turno noche.")
} */

/* EJERCICIO 18: Se realiza la carga de 10 valores enteros y se desea conocer:

a) Cantidad de negativos 
b) Cantidad de positivos
c) Cantidad de múltiplos de 15
d) Suma de los números pares

*/

/* let positivos = 0
let negativos = 0
let multiplos = 0
let sumaPares = 0

alert("Escribe 10 números enteros.")
for(let i = 1; i <= 10; i++){
    let valores = parseInt(prompt("Escribe un número entero: "))

    if (valores > 0){
        positivos++;
    } else if (valores < 0){
        negativos++;
    }
    if (valores % 15 === 0){
        multiplos++;
    }
    if (valores % 2 === 0){
        sumaPares+=valores;
    }
}

console.log("Cantidad de números positivos: "+positivos);
console.log("Cantidad de números negativos: "+negativos);
console.log("Cantidad de números múltiplos de 15: "+multiplos);
console.log("Suma de los números pares: "+sumaPares); */

/* EJERCICIO 19: Hacer un programa que lea los lados de 4 triángulos e informe:

a) Tipo de triángulo (equilátero, isósceles o escaleno)
b) Cantidad de triángulos de cada tipo
c) Cuál tipo tiene menor cantidad

*/

/* let equilatero = 0;
let isosceles  = 0;
let escaleno   = 0;

for (let i = 1; i <= 4; i++){
    let lado1 = parseFloat(prompt("Triángulo " + i + " - ingresá el lado 1:"));
    let lado2 = parseFloat(prompt("Triángulo " + i + " - ingresá el lado 2:"));
    let lado3 = parseFloat(prompt("Triángulo " + i + " - ingresá el lado 1:"));

    let tipo = "";

    if (lado1 === lado2 && lado2 === lado3){
        tipo = "Equilátero";
        equilatero++;
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        tipo = "Isósceles";
        isosceles++;
    } else{
        tipo = "Escaleno";
        escaleno++;
    }
    console.log("El triángulo " + i + " es: " + tipo);
}

let menorTipo = "";
let menorValor = Math.min(equilatero, isosceles, escaleno);

if (menorValor === equilatero) menorTipo = "Equilátero";
else if (menorValor === isosceles) menorTipo = "Isósceles";
else menorTipo = "Escaleno";

console.log("El tipo con menor cantidad es: " + menorTipo); */

// EJERCICIO 20: Crear una función que pida dos enteros (primero el menor, luego el mayor) y muestre todos los números entre ellos.

/* function dosEnteros(menor, mayor){
    for(let i = menor; i <= mayor; i++){
        console.log(i);
    }
}

dosEnteros(13, 29); */

// EJERCICIO 21: Crear una función que reciba tres enteros y retorne el promedio.

/* function promedioTresEnteros(num1,num2,num3){
    let promedio = (num1 + num2, num3) / 3;
    console.log("El promedio de los tres números ingresados es: "+promedio);
}

promedioTresEnteros(3, 14, 55); */

// EJERCICIO 22: Crear una función que solicite 5 valores y retorne su suma.

/* function cincoValorSuma(a,b,c,d,e){
    let suma = (a+b+c+d+e);
    console.log("La suma de todos los valores es: "+suma);
}

cincoValorSuma(25,26,21,58,49); */

// EJERCICIO 23: Crear una función que reciba una palabra y la devuelva con signos de exclamación.

/* function exclamacion(a){
    console.log("¡"+a+"!")
}

exclamacion("Hola Mundo") */

// EJERCICIO 24: Definir una función `obtenerNombreCompleto(nombre,apellido)` que devuelva `"nombre apellido"`.

/* function obtenerNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

console.log(obtenerNombreCompleto("Iván", "Pretel")); */

// EJERCICIO 25: Definir una función `convertirHorasEnSegundos(horas)` que devuelva el equivalente en segundos.

/* function convertirHorasEnSegundos(horas){
    let segundos = (horas * 3600);
    return segundos;
}

console.log(convertirHorasEnSegundos(12)); */

// EJERCICIO 26: Definir una función `generarEmail(usuario, dominio)` que devuelva `"usuario@dominio.com"`.

/* function generarEmail(usuario, dominio){
    console.log(usuario+"@"+dominio+".com");
}

generarEmail("gonzalo2004.2017","gmail"); */

// EJERCICIO 27: Crear un programa que pida grados Celsius y muestres la conversión a Farenheit.

/* let celsius = parseFloat(prompt("Ingrese temperatura en grados Celsius: "));

function deCelsiusAFarenheit(a) {
    return (a * 9/5) + 32;
}

let resultado = deCelsiusAFarenheit(celsius);

console.log(celsius + "°C equivalen a " + resultado + "°F");
alert(celsius + "°C equivalen a " + resultado + "°F"); */

