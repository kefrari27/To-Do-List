class Activity{
  descripcion;
  estado;
  constructor(descripcion, estado){
    this.descripcion = descripcion;
    this.estado = estado;
  }
  get descripcion(){
    return this.descripcion;
  }
  set descripcion(descripcion){
    this.descripcion = descripcion;
  }
  get estado(){
    return this.estado;
  }
  set estado(estado){
    this.estado = estado;
  }
}