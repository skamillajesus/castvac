const productos = [
    {id: 1, nombre: 'Camisa', categoria: 'Ropa', precio: 25.99},
    {id: 2, nombre: 'Pantalón', categoria: 'Ropa', precio: 35.99},
    {id: 3, nombre: 'Zapatos', categoria: 'Calzado', precio: 49.99},
    {id: 4, nombre: 'Mouse', categoria: 'Electrónica', precio: 12.99},
    {id: 5, nombre: 'Teclado', categoria: 'Electrónica', precio: 24.99},
  ];
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const resultados = document.querySelector('.resultados');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const searchTerm = input.value.toLowerCase();
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm)
  );
  mostrarResultados(productosFiltrados);
});

function mostrarResultados(productos) {
  resultados.innerHTML = '';
  if (productos.length === 0) {
    resultados.textContent = 'No se encontraron resultados';
  } else {
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.categoria} - $${producto.precio}</p>
      `;
      resultados.appendChild(div);
    });
  }
}
  