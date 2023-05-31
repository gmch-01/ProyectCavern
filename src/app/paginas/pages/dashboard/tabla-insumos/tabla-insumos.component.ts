import { Component, OnInit } from '@angular/core';
import { InventarioInsService } from 'src/app/services/inventarioins.service';

@Component({
  selector: 'app-tabla-insumos',
  templateUrl: './tabla-insumos.component.html',
  styleUrls: ['./tabla-insumos.component.css']
})
export class TablaInsumosComponent implements OnInit {

  displayedColumns: string[] = [
    'insumo', 'cantidad', 'unidad'];
  datos: any 

  constructor(private inventarioInsService: InventarioInsService) {
    this.inventarioInsService.getInventarioInsesp().subscribe(x => {
      this.datos = this.datos;
    })
  }
  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvInsumoEsp")!)
  }

  getColor(value: number) {
    if (value > 200) {
      return 'rgba(75, 192, 192, 0.5)';
    } else if (value> 25 ) {
      return 'rgba(255, 205, 86, 0.5)';
    } else if (value <= 20){
      return 'rgba(255, 99, 132, 0.5)';
    }
    else {
      return 'none'
    }
  }

}
