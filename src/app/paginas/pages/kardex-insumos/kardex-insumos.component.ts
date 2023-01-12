import { Component, OnInit } from '@angular/core';
import { AlmacenInsService } from '../../../services/almacenins.service';
import { InventarioInsService } from '../../../services/inventarioins.service';

@Component({
  selector: 'app-kardex-insumos',
  templateUrl: './kardex-insumos.component.html',
  styleUrls: ['./kardex-insumos.component.css']
})
export class KardexInsumosComponent implements OnInit {

  almacenins: any;
  InventarioIns: any;
  constructor(private AlmacenInsService: AlmacenInsService,
    private InventarioInsService: InventarioInsService) { }

  ngOnInit(): void {
    console.log("entro");
    this.getAlmacen();
  }

  getAlmacen() {
    this.AlmacenInsService.getAlmacenIns().subscribe(
      res => {
        this.almacenins = res;
        localStorage.setItem("listaAlmacenIns", JSON.stringify(this.almacenins));
        console.log(this.almacenins);
      },

      err => console.error(err)
    )
  }

  getInventarioIns(){
    this.InventarioInsService.getInventarioIns().subscribe(
      res => {
        this.InventarioIns = res;
        localStorage.setItem("listaInvInsumo", JSON.stringify(this.InventarioIns));
        console.log(this.InventarioIns);
      },

      err => console.error(err)
    )

  }

}
