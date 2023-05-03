import { Component, OnInit } from '@angular/core';
import { InventarioProdService } from 'src/app/services/inventarioprod.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  displayedColumns: string[] = [
    'producto', 'cantidad', 'unidad'];
  datos: any
  constructor(private inventarioProdService: InventarioProdService) {
    this.inventarioProdService.getInventarioProdesp().subscribe(x => {
      this.datos = this.datos;

    })
  }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvProductoEsp")!)
  }


  getColor(value: number) {
    if (value > 90) {
      return 'green';
    } else if (value > 25) {
      return 'yellow';
    } else if (value <= 20) {
      return 'red';
    }
    else {
      return 'none'
    }
  }

}
