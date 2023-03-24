const datos = [
  { id: 1, nombre: "Jesus Escamilla", puesto: "Coordinador", registro: 71501 },
  { id: 1, nombre: "Jesus Garcia", puesto: "Subcoordi", registro: 71727 },
  { id: 1, nombre: "Luis Gimenez", puesto: "Tecnico1", registro: 72243 },

  { id: "", nombre: "", puesto: "", registro: "" },

  { id: 2, nombre: "luis Andres", puesto: "Coordinador", registro: 71700 },
  { id: 2, nombre: "Roberto Carrizales", puesto: "Subcoordi", registro: 71700 },
  { id: 2, nombre: "Cesar Cruz", puesto: "Tecnico1", registro: 71700 },

  { id: "", nombre: "", puesto: "", registro: "" },

  {
    id: 3,
    nombre: "Christopher Bermudez",
    puesto: "Coordinador",
    registro: 71700,
  },
  { id: 3, nombre: "Armando Torres", puesto: "Subcordi", registro: 71700 },
  { id: 3, nombre: "Emilio Anton", puesto: "Tecnico1", registro: 71700 },
];
const tabla = document.getElementById("tabla-datos");

// Agregamos la fila de encabezados
const encabezados = ["ID", "Nombre", "Puesto", "Registro"];
const encabezadosRow = tabla.insertRow();
encabezados.forEach((encabezado) => {
  const th = document.createElement("th");
  th.innerText = encabezado;
  encabezadosRow.appendChild(th);
});

// Agregamos las filas de datos

datos.forEach((dato) => {
  const dataRow = tabla.insertRow();
  const idCell = dataRow.insertCell();
  const nombreCell = dataRow.insertCell();
  const puestoCell = dataRow.insertCell();
  const registroCell = dataRow.insertCell();

  idCell.innerText = dato.id;
  nombreCell.innerText = dato.nombre;
  puestoCell.innerText = dato.puesto;
  registroCell.innerText = dato.registro;
});
