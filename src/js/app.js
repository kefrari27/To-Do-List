//Creamos la clase Activity para todos los objetos de tipo Actividad

class Activity{
  static contadorActividad = 0;
  constructor(descripcion, estado){
    this._descripcion = descripcion;
    this._estado = estado;
    this._id = ++Activity.contadorActividad;
  }
  get descripcion(){
    return this._descripcion;
  }
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
  get estado(){
    return this._estado;
  }
  set estado(estado){
    this._estado = estado;
  }
  get id(){
    return this._id;
  }
}

//Mensaje de prueba
console.log('Probando, probando...');

//Creamos el arreglo que almacena el listado de actividades
const listadoActividades = [];

function mostrarListado(){
  //Mensaje de prueba de función
  console.log('App en funcionamiento');
  let actividadHTML = '';
  for(let actividad of listadoActividades){
    console.log(actividad);
    actividadHTML += `
    <div class="elemento">
      <div class="contenedor-descripcion">
        <i class="fas fa-play"></i>
        <p>${actividad.descripcion}</p>
      </div>
      <div class="contenedor-estado">
        <p>${actividad.estado}</p>
        <button class="btn-eliminar" onclick="eliminarActividad()">
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>`;
  }
  document.getElementById('contenedor-list').innerHTML = actividadHTML;
}

function agregarActividad(){
  const actividades = document.forms['form'];
  const descripcion = actividades['descripcion'];
  const estado = actividades['estado'];

  if(descripcion.value != '' && estado.value != ''){
    const actividad = new Activity(descripcion.value, estado.value);
    listadoActividades.push(actividad);
    mostrarListado();
  }
  else{
    window.alert('No hay información que agregar');
  }
}

function eliminarActividad(id){
  let indiceEliminar = listadoActividades.findIndex(actividad => actividad.id === id);
  console.log(indiceEliminar);
  listadoActividades.splice(indiceEliminar, 1);
  mostrarListado();
}