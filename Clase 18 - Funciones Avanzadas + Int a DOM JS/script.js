// DOM
// Document Object Model

/*

El DOM es un objeto global de JS que guarda la información de toda la página
En otras palabras, una representación virtual de la página

*/

// Quiero mostrar por consola el texto que tiene mi H1

// Para poder llamar a mi h1 podemos usar .getElementById

document.getElementById("titulo")

// console.dir(titulo.innerText)

// Modifico el texto interno del h1

titulo.innerText = "¡Hola Mundo!"

let content_container = document.getElementById('content')

/* content_container.innerText = '<button>Click</button>' */

let product_detail = {
    tittle: 'Tv Samsung',
    price: 1000000
}

// Templete string

content_container.innerHTML = `
    <h2>${product_detail.tittle}</h2>
    <span>${product_detail.price}</span>
    <button>Comprar</button>
`

let products = [
    {
        tittle: 'Tv Samsung 32',
        price: 50000
    },
    {
        tittle: 'Tv Samsung 42',
        price: 150000
    },
    {
        tittle: 'Tv Samsung 52',
        price: 300000
    },
    {
        tittle: 'Tv Samsung 64',
        price: 500000
    }
]


let html = ''

for(let product of products) {
    html = html + `
        <h2>${product.tittle}</h2>
        <span>${product.price}</span>
        <button>Comprar</button>
    `
}

content_container.innerHTML = html

/* for(let i = 0; i < products.length; i = i + 1){
    let product = products[i]
    html = html + `
        
    `
} */