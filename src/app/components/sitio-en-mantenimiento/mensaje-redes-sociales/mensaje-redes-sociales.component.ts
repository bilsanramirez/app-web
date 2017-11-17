import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-redes-sociales',
  templateUrl: './mensaje-redes-sociales.component.html',
  styleUrls: ['./mensaje-redes-sociales.component.css']
})
export class MensajeRedesSocialesComponent implements OnInit {

  mensaje: string = 'VISITA NUESTRAS REDES SOCIALES';

  constructor() { }

  ngOnInit() {
  }

}
