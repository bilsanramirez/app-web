import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  redesSociales: any[] = [
    {nombre: 'formulario', ruta: 'https://www.facebook.com/hondamotoshn/', icono: 'list'},
    {nombre: 'facebook', ruta: 'https://www.facebook.com/hondamotoshn/', icono: 'facebook'},
    {nombre: 'correo', ruta: 'https://www.facebook.com/hondamotoshn/', icono: 'envelope-o'},
    {nombre: 'youtube', ruta: 'https://www.facebook.com/hondamotoshn/', icono: 'youtube'},
    {nombre: 'instagram', ruta: 'https://www.facebook.com/hondamotoshn/', icono: 'instagram'},
    {nombre: 'twitter', ruta: 'https://www.facebook.com/hondamotoshn/', icono: 'twitter'},
 ];

  constructor() { }

  ngOnInit() {
  }

}
