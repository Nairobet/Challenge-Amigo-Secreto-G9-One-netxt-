let listaAmigos = [];

function agregarAmigo() {
   
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 
   
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    listaAmigos.push(nombre);

        input.value = "";

    mostrarLista();
}

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

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ""; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = amigoSeleccionado;
    resultadoHTML.appendChild(li);

}
