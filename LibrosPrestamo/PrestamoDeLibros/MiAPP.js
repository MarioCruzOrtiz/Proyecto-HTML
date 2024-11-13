// Actualiza la navegación entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.classList.add('active');
  });
});

// Actualiza la navegación entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.classList.add('active');
  });
});
 
class Libro {
  constructor(titulo, autor, copias){
    this.titulo = titulo;
    this.autor = autor;
    this.copias = copias;
  }
 
  prestar(){
    if(this.copias > 0){
      this.copias -= 1;
      return true;
    }
    else{
      return false
    }
  }
 
  devolver(){
    this.copias +=1;
  }
}
 
class Usuario{
  constructor(nombre){
    this.nombre = nombre
  }
}
 
const libros = [];
const usuarios =[];
 
const listaLibros = document.getElementById('lista-libros');
const libroPrestamoSelect = document.getElementById('libro-prestamo');
const libroDevolucionSelect = document.getElementById('libro-devolucion');
const usuarioPrestamoSelect = document.getElementById('usuario-prestamo');
const usuarioDevolucionSelect = document.getElementById('usuario-devolucion');
 
 
// Actualiza la navegación entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.classList.add('active');
  });
});
 
//Maneja el registro de libros
document.getElementById('form-registrar-libro').addEventListener('submit', function (event){
  event.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const copias = parseInt(document.getElementById('copias').value);
 
  const nuevoLibro = new Libro(titulo, autor, copias);
  libros.push(nuevoLibro);
  actualizarListaLibros();
  this.reset()
})
 
//Maneja el registro de usaurios
document.getElementById('form-registrar-usuario').addEventListener('submit', function(event){
  event.preventDefault();
 
 
  const nombreUsuario = document.getElementById('nombre-usuario');
 
  const nuevoUsuario = new Usuario(nombreUsuario);
  usuarios.push(nuevoUsuario);
  actualizarListaUsuarios();
  this.reset();
})
 
//Maneja el prestamo de libros
document.getElementById('form-prestar-libro').addEventListener('submit', function (evento){
  evento.preventDefault();
  const libroSeleccionado = libroPrestamoSelect.value;
  const usuarioSeleccionado = usuarioPrestamoSelect.value;
 
  const libro = libros.find(lib => lib.titulo === libroSeleccionado);
 
  if(libro.prestar()) {
    alert(`Prestamo realizado con exito para el usuario: ${usuarioSeleccionado}`);
    actualizarListaLibros();
  }
 
else{
  alert(`No hay copia disponible para este libro.`);
}
 
  this.reset();
});
 
 
//Maneja la devolución de libros
document.getElementById('form-devolver-libro').addEventListener('submit', function (evento){
  evento.preventDefault();
  const libroSeleccionado = libroDevolucionSelect.value;
  const usuarioSeleccionado = usuarioDevolucionSelect.value;
 
  const libro = libros.find(lib => lib.titulo === libroSeleccionado);
 
  if(libro.devolver()) {
    alert(`Devolución realizada con exito por el usuario: ${usuarioSeleccionado}`);
    actualizarListaLibros();
  }
 
else{
  alert(`Error al devolver el libro.`);
}
 
  this.reset();
});
 
function actualizarListaLibros() {
  listaLibros.innerHTML = '';
  libroPrestamoSelect.innerHTML = '';
  libroDevolucionSelect.innerHTML = '';
 
  libros.forEach(libro => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${libro.titulo} - Autor: ${libro.autor} - Copias disponibles: ${libro.copias}`
    listaLibros.appendChild(li);
 
    const optionPrestamo = document.createElement('option');
    optionPrestamo.value = libro.titulo;
    optionPrestamo.textContent = libro.titulo;
    libroPrestamoSelect.appendChild(optionPrestamo);
 
    const optionDevolucion = document.createElement('option');
    optionPrestamo.value = libro.titulo;
    optionPrestamo.textContent = libro.titulo;
    libroDevolucionSelect.appendChild(optionDevolucion);
  });
}
 
function actualizarListaUsuarios() {
  usuarioPrestamoSelect.innerHTML = '';
  usuarioDevolucionSelect.innerHTML = '';
 
  usuarios.forEach(usuario => {
    const optionPrestamo = document.createElement('option');
    optionPrestamo.value = usuario.nombre;
    optionPrestamo.textContent = usuario.nombre;
    usuarioPrestamoSelect.appendChild(optionPrestamo);
 
    const optionDevolucion = document.createElement('option');
    optionDevolucion.value = usuario.nombre;
    optionDevolucion.textContent = usuario.nombre;
    usuarioDevolucionSelect.appendChild(optionDevolucion);
  })
}