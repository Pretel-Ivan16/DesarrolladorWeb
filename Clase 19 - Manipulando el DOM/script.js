const mensajes = [
    { id: 1, content: 'Hola que tal!', author: 'pepe', created_at: 'hoy' },
    { id: 2, content: 'Todo bien?', author: 'maria', created_at: 'hoy' },
    { id: 3, content: 'Si, con mucho miedo por el calor', author: 'Pepe', created_at: 'hoy' },
];

const msg_container = document.getElementById('msg_container');

function renderMessages(mensajes) {
    for (let mensaje of mensajes) {
        msg_container.innerHTML += `
            <div class="msg">
                <div class="author">${mensaje.author}</div>
                <div class="text">${mensaje.content}</div>
                <div class="date">${mensaje.created_at}</div>
            </div>
        `;
    }  
}

renderMessages(mensajes);
