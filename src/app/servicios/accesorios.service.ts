import { Injectable } from '@angular/core';

@Injectable()

export class AccesoriosService {

  constructor() {
    console.log('Servicio listo para usar');
  }

  obtenerCategoriaAccesorios(){
    return 'obtener categorias accesorios';
  }

  obtenerAccesorios( idCategoria ) {
    return 'obtener  accesorios por categoria';
  }

}
