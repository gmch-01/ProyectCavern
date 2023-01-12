import { Component, OnInit } from '@angular/core';
import { InventarioInsService } from '../../../services/inventarioins.service';

@Component({
  selector: 'app-inventario-ins',
  templateUrl: './inventario-ins.component.html',
  styleUrls: ['./inventario-ins.component.css']
})
export class InventarioInsComponent implements OnInit {
  inventarioIns: any;
  constructor(  
    private InventarioInsService: InventarioInsService,) { }

  ngOnInit(): void {
    
  }

  getInventarioIns(){
    this.InventarioInsService.getInventarioIns().subscribe(
      res => {
        this.inventarioIns = res;
        localStorage.setItem("listaInvInsumo", JSON.stringify(this.inventarioIns));
        console.log(this.inventarioIns);
      },

      err => console.error(err)
    )

  }

}
