import { Component, OnInit } from '@angular/core';
import { InventarioInsService } from '../../../services/inventarioins.service';

@Component({
  selector: 'app-inventario-ins',
  templateUrl: './inventario-ins.component.html',
  styleUrls: ['./inventario-ins.component.css']
})
export class InventarioInsComponent implements OnInit {
  inventarioIns: any;
  inventarioInsEsp: any;
  constructor(  
    private InventarioInsService: InventarioInsService,) { }

  ngOnInit(): void {
    this.getInventarioIns()
    this.getInventarioInsesp()
  }

  getInventarioIns(){
    this.InventarioInsService.getInventarioIns().subscribe(
      res => {
        this.inventarioIns = res;
        localStorage.setItem("listaInvInsumo", JSON.stringify(this.inventarioIns));
      },

      err => console.error(err)
    )

  }
  getInventarioInsesp(){
    this.InventarioInsService.getInventarioInsesp().subscribe(
      res => {
        this.inventarioInsEsp = res;
        localStorage.setItem("listaInvInsumoEsp", JSON.stringify(this.inventarioInsEsp));
      },

      err => console.error(err)
    )

  }

}
