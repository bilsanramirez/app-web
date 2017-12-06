import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado-categorias-accesorios',
  templateUrl: './listado-categorias-accesorios.component.html',
  styleUrls: ['./listado-categorias-accesorios.component.css'],
})

export class ListadoCategoriasAccesoriosComponent implements OnInit {

  public categoriasAccesorios: Array<string>;

  constructor( ) {
   }

  ngOnInit() {

  }

}
