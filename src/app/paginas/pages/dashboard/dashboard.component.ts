import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { InventarioInsService } from '../../../services/inventarioins.service';
import { InventarioProdService } from '../../../services/inventarioprod.service';
import { InventarioIns } from 'src/app/models/InventarioIns';
import { HojaProduccionService } from '../../../services/hojaproduccion.service';
import { PosiblesService } from 'src/app/services/posibles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inventarioIns: any;
  inventarioInsChart: any;
  inventarioProd: any;
  hojaprod: any;
  posibles: any;

  constructor(private InventarioInsService: InventarioInsService,
    private InventarioProdService: InventarioProdService,
    private HojaProduccionService: HojaProduccionService,
    private PosiblesService: PosiblesService) { }



  ngOnInit(): void {
    this.getInventarioIns();
    this.getInventarioProd();
    this.getHojaProd();
    this.getPosible();
    this.getInventarioInsChart()

  }

  getInventarioIns() {
    this.InventarioInsService.getInventarioInsesp().subscribe(
      res => {
        this.inventarioIns = res;
        localStorage.setItem("listaInvInsumoEsp", JSON.stringify(this.inventarioIns));
        console.log(this.inventarioIns, "LISTA ESPECIAL");
      },

      err => console.error(err)
    )

    this.inventarioIns = JSON.parse(localStorage.getItem("listaInvInsumoEsp")!)
    console.log("llego LOS DATOS Insumos", this.inventarioIns);
    this.inventarioIns = Object.values(this.inventarioIns);
  }

  getInventarioInsChart() {
    this.InventarioInsService.getInventarioInsChart().subscribe(
      res => {
        this.inventarioInsChart = res;
        localStorage.setItem("listaInvInsumoChart", JSON.stringify(this.inventarioInsChart));
        console.log(this.inventarioInsChart, "LISTA ESPECIAL GRAFICO");
      },

      err => console.error(err)
    )
  }


  getInventarioProd() {
    this.InventarioProdService.getInventarioProdesp().subscribe(
      res => {
        this.inventarioProd = res;
        localStorage.setItem("listaInvProductoEsp", JSON.stringify(this.inventarioProd));
      },

      err => console.error(err)
    )
    this.inventarioProd = JSON.parse(localStorage.getItem("listaInvProductoEsp")!)
    console.log("llego LOS DATOS Productos", this.inventarioProd);
    this.inventarioProd = Object.values(this.inventarioProd);
  }

  getHojaProd() {
    this.HojaProduccionService.getHojaProduccion().subscribe(
      res => {
        this.hojaprod = res;
        localStorage.setItem("hojaProd", JSON.stringify(this.hojaprod))
        console.log(this.hojaprod, "los datos de la hoja");
      },

      err => console.error(err)
    )
    this.hojaprod = JSON.parse(localStorage.getItem("hojaProd")!)
    console.log("llego LOS DATOS Hoja", this.hojaprod);
    this.hojaprod = Object.values(this.hojaprod);
  }

  getPosible() {
    this.PosiblesService.getPosibles().subscribe(
      res => {
        this.posibles = res;
        localStorage.setItem("listaPosibles", JSON.stringify(this.posibles));
        console.log(this.posibles);
      },

      err => console.error(err)
    )

    this.posibles = JSON.parse(localStorage.getItem("listaPosibles")!)
    console.log("llego LOS DATOS POSIBLES", this.posibles);
    this.posibles = Object.values(this.posibles);
  }

}


