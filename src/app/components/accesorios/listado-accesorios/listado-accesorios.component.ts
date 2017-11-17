import { Component, OnInit } from '@angular/core';
import { AccesoriosService, Accesorio } from '../../../servicios/accesorios.service';

@Component({
  selector: 'app-listado-accesorios',
  templateUrl: './listado-accesorios.component.html',
  styleUrls: ['./listado-accesorios.component.css']
})
export class ListadoAccesoriosComponent implements OnInit {

  accesorios: Accesorio[] = [];

  constructor( private _accesoriosService: AccesoriosService ) {

   }

  ngOnInit() {
    this.accesorios = this._accesoriosService.getAccesorios();
    console.log( this.accesorios );
  }

}
