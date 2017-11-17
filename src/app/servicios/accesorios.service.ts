import {Injectable} from '@angular/core';

@Injectable()

export class AccesoriosService {

  private accesorios: any[] = [
    {
      nombre: "moto 1",
      descripcion: "Esta es la descripcion de la moto 1",
      img: "assets/img/motos/moto1.jpg",
      precio: 300,
    },
    {
      nombre: "moto 2",
      descripcion: "Esta es la descripcion de la moto 1",
      img: "assets/img/motos/moto1.jpg",
      precio: 1300,
    }
    ,
    {
      nombre: "moto 3",
      descripcion: "Esta es la descripcion de la moto 3",
      img: "assets/img/motos/moto1.jpg",
      precio: 5000,
    },
    {
      nombre: "moto 4",
      descripcion: "Esta es la descripcion de la moto 4",
      img: "assets/img/motos/moto1.jpg",
      precio: 560,
    }
  ];

  constructor() {
    console.log('Servicio listo para usar');
  }

  getAccesorios(): Accesorio[] {
    return this.accesorios;
  }
}

export interface Accesorio {
  nombre: string;
  descripcion: string;
  img: string;
  precio: string;
}
