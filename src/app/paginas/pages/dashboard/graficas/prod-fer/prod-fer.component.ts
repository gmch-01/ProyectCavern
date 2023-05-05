import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-fer',
  templateUrl: './prod-fer.component.html',
  styleUrls: ['./prod-fer.component.css']
})
export class ProdFerComponent implements OnInit {

  datos: any
  datosFil: any
  displayedColumns: string[] = [
    'ID', 'Receta', 'Cantidad'];
  constructor() { }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaHoy")!)
    this.datos = Object.values(this.datos);
  }

  getColor(value: number) {
    if (value > 90) {
      return 'rgba(255, 99, 132, 0.5)';
    } else if (value > 25) {
      return 'rgba(255, 205, 86, 0.5)';
    } else if (value <= 20) {
      return 'rgba(255, 99, 132, 0.5)';
    }
    else {
      return 'none'
    }
  }


}
