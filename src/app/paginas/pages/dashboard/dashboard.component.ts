import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { InventarioInsService } from '../../../services/inventarioins.service';
import { InventarioProdService } from '../../../services/inventarioprod.service';
import { InventarioIns } from 'src/app/models/InventarioIns';
import { HojaProduccionService } from '../../../services/hojaproduccion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inventarioIns: any;
  inventarioProd: any;
  hojaprod: any

  constructor(private InventarioInsService: InventarioInsService, 
              private InventarioProdService: InventarioProdService,
              private HojaProduccionService: HojaProduccionService  ) { }



  ngOnInit(): void {
    this.getInventarioIns();
    this.getInventarioProd();
    this.getHojaProd();

  }

  getInventarioIns (){
    this.InventarioInsService.getInventarioIns().subscribe(
      res => {
        this.inventarioIns = res;
        localStorage.setItem("listaInvInsumo", JSON.stringify(this.inventarioIns));
        console.log(this.inventarioIns);
      },

      err => console.error(err)
    )
  }
  getInventarioProd (){
    this.InventarioProdService.getInventarioProd().subscribe(
      res => {
        this.inventarioProd = res;
        localStorage.setItem("listaInvProducto", JSON.stringify(this.inventarioProd));
        console.log(this.inventarioProd);
      },

      err => console.error(err)
    )
  }

  getHojaProd (){
    this.HojaProduccionService.getHojaProduccion().subscribe(
      res => {
        this.hojaprod = res;

        console.log(this.hojaprod, "los datos de la hoja");
      },

      err => console.error(err)
    )
  }
}


