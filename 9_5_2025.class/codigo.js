// =================== LISTA DE ESTUDIANTES INICIALES ===================
let ListaObjeto = [
  { nombre: "Amanda Zhang", edad: 20, correo: "amanda.zhang@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000001", ciudad: "La Paz" },
  { nombre: "Cesar Zambrana", edad: 22, correo: "cesar.zambrana.v@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000002", ciudad: "Santa Cruz" },
  { nombre: "Diego Villazón", edad: 21, correo: "diego.villazon@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000003", ciudad: "La Paz" },
  { nombre: "Joel Molina", edad: 19, correo: "joel.molina@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000004", ciudad: "La Paz" },
  { nombre: "Adriana Hernández", edad: 20, correo: "adriana.hernandez@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000005", ciudad: "La Paz" },
  { nombre: "Edel Abarra", edad: 23, correo: "edelabarra@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000006", ciudad: "Santa Cruz" },
  { nombre: "Elías Roca", edad: 21, correo: "elias.roca@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000007", ciudad: "La Paz" },
  { nombre: "Sebastián Leigue", edad: 22, correo: "sebastian.leigue@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000008", ciudad: "Santa Cruz" },
  { nombre: "Carla Ortiz", edad: 20, correo: "carla.ortiz.a@ucb.edu.bo", carrera: "Psicología", telefono: "+591 70000009", ciudad: "La Paz" }
];

// =================== FUNCIONES ===================

// Crear tabla en pantalla
function crearTabla(datos) {
  let tabla = '<table>';
  tabla += `
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Correo</th>
        <th>Carrera</th>
        <th>Teléfono</th>
        <th>Ciudad</th>
      </tr>
    </thead>
    <tbody>
  `;

  datos.forEach(estudiante => {
    tabla += `
      <tr>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.edad}</td>
        <td>${estudiante.correo}</td>
        <td>${estudiante.carrera}</td>
        <td>${estudiante.telefono}</td>
        <td>${estudiante.ciudad}</td>
      </tr>
    `;
  });

  tabla += '</tbody></table>';
  document.getElementById("tabla-container").innerHTML = tabla;
}

// Agregar nuevo estudiante desde inputs
function AddEstudiante() {
  const varName = document.getElementById("input_name").value;
  const varEdad = Number(document.getElementById("input_edad").value);
  const varCorreo = document.getElementById("input_correo").value;
  const varCarrera = document.getElementById("input_carrera").value;
  const varPhone = document.getElementById("input_phone").value;
  const varCiudad = document.getElementById("input_ciudad").value;

  const estudiante = {
    nombre: varName,
    edad: varEdad,
    correo: varCorreo,
    carrera: varCarrera,
    telefono: varPhone,
    ciudad: varCiudad
  };

  if (estudiante.edad >= 18) {
    ListaObjeto.push(estudiante);
    console.log("INSERTADO CON ÉXITO:", estudiante);
  } else {
    alert("⚠️ Solo se permiten estudiantes mayores de 18 años.");
    return;
  }

  crearTabla(ListaObjeto);
}

// Mostrar habilitados OEP (ejemplo extra)
function MostrarHabilitadosOEP() {
  ListaObjeto.forEach(e => {
    if (e.edad >= 18) {
      console.log("Hola " + e.nombre + ", estás habilitado para votar :)");
    }
  });
}

// =================== EJECUCIÓN INICIAL ===================
window.onload = function () {
  crearTabla(ListaObjeto); // muestra la lista inicial apenas carga
};
