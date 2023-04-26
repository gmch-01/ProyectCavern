import { Component, OnInit } from '@angular/core';
import { InventarioInsService } from '../../../../services/inventarioins.service';


@Component({
  selector: 'app-tabla-inv',
  templateUrl: './tabla-inv.component.html',
  styleUrls: ['./tabla-inv.component.css']
})
export class TablaInvComponent implements OnInit {
  displayedColumns: string[] = [
    'insumo', 'cantidad'];
  datos: any 
  datosEsp: any

  constructor(private InventarioInsService: InventarioInsService, private InventarioInsSErviceEsp: InventarioInsService) { 
    this.InventarioInsService.getInventarioIns().subscribe(x => {
      this.datos = this.datos;
      console.log(this.datos)
    
  })
    this.InventarioInsSErviceEsp.getInventarioInsesp().subscribe(x => {
      this.datosEsp = this.datosEsp;
      console.log(this.datosEsp)
    
  })
}

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvInsumo")!)
    console.log("refrecar ", this.datos);
    
    this.datosEsp = JSON.parse(localStorage.getItem("listaInvInsumoEsp")!)
    console.log("QYERU ESPECIAL", this.datosEsp);

  }

}
