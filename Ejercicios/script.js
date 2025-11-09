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

