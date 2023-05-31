import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-bols',
  templateUrl: './prod-bols.component.html',
  styleUrls: ['./prod-bols.component.css']
})
export class ProdBolsComponent implements OnInit {


  datos: any
  datosFil: any
  displayedColumns: string[] = [
    'ID', 'Receta',  'peso', 'peso_receta'];
  constructor() { }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaHoyRec")!)
    this.datos = Object.values(this.datos);
    console.log(this.datos, "LAS RECETAS 20")
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

  getProgreso(){
    for (let i = 0; i < this.datos.length; i++) {
      if(this.datos[i].progreso === 20)
    {
      this.datosFil= this.datos[i]
  
    }
    }
  
    console.log(this.datosFil, "DATOS DE SOLO PROGRESO  20") 
  }

}
