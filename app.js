// Declarar el array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
let agregarAmigo = function() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar máximo de 5 amigos
    if (amigos.length >= 5) {
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar campo de entrada

    mostrarListaAmigos();

    // Deshabilitar el botón si hay 5 amigos
    if (amigos.length >= 5) {
        document.querySelector('.button-add').disabled = true;
    }
}

// Función para mostrar la lista de amigos
let mostrarListaAmigos = function() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
let sortearAmigo = function() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indice];

    resultado.innerHTML = "<li>El amigo secreto es: <strong>" + nombreSorteado + "</strong></li>";
}