import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: string[] = ["MOTOS", "REPUESTOS", "ACCESORIOS", "CREDITO", "CONTACTO"];

  constructor() { }

  ngOnInit() {
  }

}
