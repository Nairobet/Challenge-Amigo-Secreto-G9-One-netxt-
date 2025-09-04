// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Tomar el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // trim elimina espacios al inicio y final

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    // Agregar el nombre al arreglo
    listaAmigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista visible en HTML
    mostrarLista();
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar lista antes de mostrar

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos un nombre.");
        return;
    }

    // Elegir un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ""; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = amigoSeleccionado;
    resultadoHTML.appendChild(li);
}