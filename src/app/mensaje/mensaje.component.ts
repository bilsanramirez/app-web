import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})

export class MensajeComponent implements OnInit {

  mensaje: string = 'SITIO WEB EN MANTENIMIENTO';

  constructor() { }

  ngOnInit() {
  }

}
