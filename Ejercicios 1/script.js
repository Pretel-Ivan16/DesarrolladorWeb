// EJERCICIO 1: Dado un array de números, escribir una función que calcule la suma de todos los números del array.

/* function sumarArray(numeros){
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

console.log(sumarArray([1,2,3,4,5])); */

// EJERCICIO 2: Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.

/* function sumarArray(palabras){
    let suma = "";
    for (let palabra of palabras) {
        suma += palabra;
    }
    return suma;
}

console.log(sumarArray(["¡Hola ", "mundo!"])); */

// EJERCICIO 3: Dado un array de números, escribir una función que devuelva un array con todos los números mayores a 10.

/* function numerosMayoresArray(mayores){
    let mayoresDiez = [];
    for (let mayor of mayores){
        if (mayor >= 10){
            mayoresDiez.push(mayor);
        }
    }
    return mayoresDiez
}

console.log(numerosMayoresArray([1,2,3,4,5,6,7,8,9,10,11,12,13])); */


// EJERCICIO 4: Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

/* function arrayNumerosPares(numeros){
    let numerosPares = [];
    for (let numero of numeros){
        if (numero % 2 == 0){
            numerosPares.push(numero);
        }
    }
    return numerosPares;
}

console.log(arrayNumerosPares([1,2,3,4,5,6,7,8,9,10]));  */

// EJERCICIO 5: Mediante el uso del método indexOF y splice, desarrollar una función que reciba un array de strings y un stringEliminar, la misma función nos devolverá un array sin el elemento que se eliminó. En caso de no tener el elemento a eleminar se deberá retornar null.

/* function eliminarString(array, stringEliminar){
    let indice = array.indexOf(stringEliminar);
    if (indice === -1){
        return null
    }
    array.splice(indice, 1);
    return array;
}

let frutas = ["Manzana", "Mandarina", "Banana", "Pera", "Ananá", "Naranja", "Frutilla"];
console.log(eliminarString(frutas, "Ananá"));
console.log(eliminarString(frutas, "Ajo")); */

// EJERCICIO 6: Dado un array de nombres y un nombreDeLista, de deberá crear una función llamada crearLista que retorne un string.

/* function crearLista(nombres, nombreLista){

    console.log("Lista de " + nombreLista);

    let sumaNombre = 1;

    for (let nombre of nombres){
        console.log(sumaNombre+") "+nombre);
        sumaNombre++;
    }
}

crearLista(["Juan", "Roberto", "Ivan"], "estudiantes: "); */

// EJERCICIO 7: Dado un array de strings y un stringBuscado, elaborar una función que retorne la cantidad ded veces que apreció en el array el stringBuscado.

/* function arrayStringBuscado(strings, stringBuscado){

    let numeroBuscado = 0;

    for (let buscado of strings){
        if (buscado === stringBuscado){
            numeroBuscado++;
        } 
    }
    if (numeroBuscado > 0) {
        console.log(`"${stringBuscado}" aparece ${numeroBuscado} veces.`);
    } else {
        console.log(`"${stringBuscado}" no aparece en la lista.`);
    }
}

arrayStringBuscado(["Hola", " Mundo", " Como", " Estas."], "Hola"); */

// EJERCICIO 8: Crear un array vacio llamado gananciasMensuales. Crear una función llamada vender, que reciba una cantidadVendida, un precio y un nombreDeProducto. La misma deberá agregar el precio total al array de gananciasMensuales.

/* let gananciasMensuales = []

function vender(nombreDeProducto, precio, cantidadVendida){
    let vendido = (precio * cantidadVendida);
    gananciasMensuales.push(vendido)
    console.log("La ganancia mensual de "+nombreDeProducto+" fue de: $"+vendido);
    return gananciasMensuales
}

vender("Naranjas", 300, 8);
vender("Manzanas", 250, 9);
vender("Bananas", 100, 40);
console.log(gananciasMensuales); */

// EJERCICIO 9: Crear un array vacío llamado gastosMensuales. Crear una cunción llamada comprar, que reciba una cantidadComprada, un precio y un nombreDeProducto. La misma deberá agragar el total al array de gastosMensuales.

/* let gastosMensuales = [];

function comprar(nombreDeProducto, precio, cantidadComprada){
    let comprada = (precio * cantidadComprada);
    gastosMensuales.push(comprada);
    console.log("El gasto mensual de "+nombreDeProducto+" fue de: $"+comprada);
}

comprar("Peras", 400, 3);
comprar("Frutillas", 500, 4);
comprar("Bananas", 60, 50);
console.log(gastosMensuales);
 */

// EJERCICIO 10: Dado el array gastosMensuales y gananciasMensuales, desarrollar una función que nos retorne la ganananciasMensuales. La misma se deduce de la diferencia entre la suma de valores del array de gastosMensuales y el de gananciasMensuales.

/* function obtenerGananciaTotal(ganancias, gastos) {
    let totalGanancias = sumarArray(ganancias);
    let totalGastos = sumarArray(gastos);

    return totalGanancias - totalGastos;
}

console.log("Ganancia total del mes: $" + obtenerGananciaTotal(gananciasMensuales, gastosMensuales));
 */

// EJERCICIO 11: Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo.

/* const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;

console.log(calcularAreaTriangulo(5, 6)); */

// EJERCICIO 12: Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.

/* const esElUltimoCaracter = (palabra, a) => {
    return palabra[palabra.length - 1] === a;
};

console.log(esElUltimoCaracter("hola", "a")); */

// EJERCICIO 13: Definí una función esValida que tome por parámetro una contraseña (string) y nos indique si tiene 8 caracteres o más.

/* const esValida = (contraseña) => {
    return contraseña.length >= 8;
}; */

// EJERCICIO 14: Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee.

/* const contarPalabras = (str) => { 
    return str.split(" ").length;
}

console.log(contarPalabras("Buenas tardes señor"));  */

// EJERCICIO 15: Definí una función capitalizar que reciba como argumento un string str y devuelva el mismo string con la primera letra en mayúscula.

/* const capitalizar = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizar("hola"));
console.log(capitalizar("mundo"));
console.log(capitalizar("iván")); */

// EJERCICIO 16: Definí una función obtenerPrimeraOracion que tome por parámetro un string str y devuelva la primera oración de dicho string.

/* const obtenerPrimeraOracion = (str) => {
    return str.split(".")[0] + ".";
};

console.log(obtenerPrimeraOracion("Hola Mundo. ¿Como estás?")); */

// EJERCICIO 17: Definí una función ocultarContrasenia que reciba como argumento una contraseña de solo números y devuelva un string con dicha contraseña ocultada en asteriscos, es decir, un string con la misma la misma longitud donde todos sus caracteres son asteriscos.
