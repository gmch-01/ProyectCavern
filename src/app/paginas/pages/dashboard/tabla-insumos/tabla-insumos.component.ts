import { Component, OnInit } from '@angular/core';
import { InventarioInsService } from 'src/app/services/inventarioins.service';

@Component({
  selector: 'app-tabla-insumos',
  templateUrl: './tabla-insumos.component.html',
  styleUrls: ['./tabla-insumos.component.css']
})
export class TablaInsumosComponent implements OnInit {

  displayedColumns: string[] = [
    'insumo', 'cantidad'];
  datos: any 

  constructor(private inventarioInsService: InventarioInsService) {
    this.inventarioInsService.getInventarioIns().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    
   })
  }
  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvInsumo")!)
    console.log("refrecar ", this.datos);
  }

}
