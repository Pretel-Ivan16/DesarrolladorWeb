/* 

EVENTOS:

Son acciones que suceden en el navegador, 
cuando estas acciones suceden nosotros 
podemos ejecutar otra acción en consecuencia

*/

const btn_click = document.getElementById('btn')


function decirHolaMundo(){
    alert('Hola mundo')
}

// Es el método para asociar un evento a una función

btn_click.addEventListener(
    'click',
    decirHolaMundo
)

/* 

- Crear una variable interna llamada contador que empiece en 0
- Mostrar el valor de contador en el sapn con id contador
- Crear una función que se llame incrementarContador()
    Esta función incremetará el contador en 1 y mostrará
    el valor de contador en el span con id contador.
- Si le doy 'click' al botón con id 'btn-incrementar' deberá 
ejecutarse la función incrementarContador()

*/

let contador = 0

const spanContador = document.getElementById('contador');
spanContador.textContent = contador;

function incrementarContador(){
    contador = contador + 1;
    spanContador.textContent = contador;
}

const btnIncrementar = document.getElementById('btn-incrementar');
btnIncrementar.addEventListener(
    'click',
    incrementarContador
);


/* 

- Crear una funcion llamada decrementarContador()
- Cuando de click sobre el boton con id 'btn-decrementar' debera ejecutarse la funcion decrementarContador()
- Crear una funcion llamada resetContador() (llevara el contador a 0)
- Cuando de click sobre el boton con id btn-reiniciar se debera activar la funcion btn-reiniciar

*/

function decrementarContador() {
    contador = contador - 1;
    spanContador.textContent = contador;
};

const btnDecrementar = document.getElementById('btn-decrementar');
btnDecrementar.addEventListener(
    'click',
    decrementarContador
);

function resetContador() {
    contador = 0;
    spanContador.textContent = contador;
}

const btnReiniciar = document.getElementById('btn-reiniciar');
btnReiniciar.addEventListener(
    'click',
    resetContador
);
