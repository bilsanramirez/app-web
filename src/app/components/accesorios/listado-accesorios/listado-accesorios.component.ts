import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../../servicios/accesorios.service';
import { AccesorioComponent } from 'app/components/accesorios/accesorio/accesorio.component';

@Component({
  selector: 'app-listado-accesorios',
  templateUrl: './listado-accesorios.component.html',
  styleUrls: ['./listado-accesorios.component.css']
})
export class ListadoAccesoriosComponent implements OnInit {



  constructor( private _accesoriosService: AccesorioComponent ) {

   }

  ngOnInit() {

  }

}
