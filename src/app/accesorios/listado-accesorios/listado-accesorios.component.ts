import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../servicios/accesorios.service';

@Component({
  selector: 'app-listado-accesorios',
  templateUrl: './listado-accesorios.component.html',
  styleUrls: ['./listado-accesorios.component.css']
})
export class ListadoAccesoriosComponent implements OnInit {

  constructor( private _accesoriosService: AccesoriosService ) {

   }

  ngOnInit() {
  }

}
