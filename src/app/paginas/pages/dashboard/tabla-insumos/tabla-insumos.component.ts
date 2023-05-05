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
      return 'green';
    } else if (value> 25 ) {
      return 'yellow';
    } else if (value <= 20){
      return 'red';
    }
    else {
      return 'none'
    }
  }

}
