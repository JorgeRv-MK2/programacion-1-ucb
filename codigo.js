function mostrarNombre() {
  const nombre = document.getElementById("nombres").value;
  const resultado = document.getElementById("resultado");
  resultado.textContent = nombre.trim() === "" ? "Por favor, escribe tu nombre." : "Hola, " + nombre + " 👋";
}

var lista = [];
function InsertarLista() {
  var valorAleatorio = Math.floor(Math.random() * 10);
  const resultado = document.getElementById("resultado");
  lista.push(valorAleatorio);
  const nuevoBoton = document.createElement("button");
  nuevoBoton.classList.add("boton-lista");
  nuevoBoton.textContent = valorAleatorio;
  resultado.appendChild(nuevoBoton);
  setTimeout(() => nuevoBoton.classList.add("visible"), 10);
}

function EliminarLista() {
  const valor = prompt("Ingrese el número que desea eliminar:");
  if (valor === null || valor.trim() === "" || isNaN(valor)) {
    alert("Debe ingresar un número válido.");
    return;
  }
  const numero = parseInt(valor);
  lista = lista.filter(item => item !== numero);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  lista.forEach(num => {
    const boton = document.createElement("button");
    boton.classList.add("boton-lista");
    boton.textContent = num;
    resultado.appendChild(boton);
    setTimeout(() => boton.classList.add("visible"), 10);
  });
  alert("Se han eliminado todas las ocurrencias de: " + numero);
}
