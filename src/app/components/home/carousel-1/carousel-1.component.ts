import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-1',
  templateUrl: './carousel-1.component.html',
  styleUrls: ['./carousel-1.component.css']
})
export class Carousel1Component implements OnInit {

  indicadores: string;

  constructor() { }


  ngOnInit() {
  }

  mostrarIndicadores() {
    this.indicadores = 'd-flex';
  }

  ocultarIndicadores() {
    this.indicadores = 'd-none';
  }

}
