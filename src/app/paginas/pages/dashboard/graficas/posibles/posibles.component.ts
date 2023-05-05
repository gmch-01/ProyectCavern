import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posibles',
  templateUrl: './posibles.component.html',
  styleUrls: ['./posibles.component.css']
})
export class PosiblesComponent implements OnInit {

  datos: any
  displayedColumns: string[] = [
    'ID', 'Receta', 'Cantidad'];
  constructor() { }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaPosibles")!)
    this.datos = Object.values(this.datos);
    console.log(this.datos)

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
