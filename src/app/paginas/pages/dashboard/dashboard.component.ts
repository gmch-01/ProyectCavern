import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { InventarioInsService } from '../../../services/inventarioins.service';
import { InventarioProdService } from '../../../services/inventarioprod.service';
import { InventarioIns } from 'src/app/models/InventarioIns';
import { HojaProduccionService } from '../../../services/hojaproduccion.service';
import { AlmacenInsService } from '../../../services/almacenins.service';
import { PosiblesService } from 'src/app/services/posibles.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inventarioIns: any;
  inventarioInsChart: any;
  VencIns: any;
  inventarioProd: any;
  hojaprod: any;
  despachados: any;

  posibles: any;
  constructor(private InventarioInsService: InventarioInsService,
    private InventarioProdService: InventarioProdService,
    private HojaProduccionService: HojaProduccionService,
    private PosiblesService: PosiblesService,
    private AlmacenInsService: AlmacenInsService) { }



  ngOnInit(): void {
    this.getInventarioIns();
    this.getInventarioProd();
    this.getHojaProd();
    this.getPosible();
    this.getInventarioInsChart();
    this.getAlmacenVenc();
    this.getDespachados();
  }

  getInventarioIns() {
    this.InventarioInsService.getInventarioInsesp().subscribe(
      res => {
        this.inventarioIns = res;
        localStorage.setItem("listaInvInsumoEsp", JSON.stringify(this.inventarioIns));

      },

      err => console.error(err)
    )

    this.inventarioIns = JSON.parse(localStorage.getItem("listaInvInsumoEsp")!)
    this.inventarioIns = Object.values(this.inventarioIns);
  }

  getInventarioInsChart() {
    this.InventarioInsService.getInventarioInsChart().subscribe(
      res => {
        this.inventarioInsChart = res;
        localStorage.setItem("listaInvInsumoChart", JSON.stringify(this.inventarioInsChart));
      },

      err => console.error(err)
    )
  }

  getAlmacenVenc() {
    this.AlmacenInsService.getAlmacenInsEsp().subscribe(
      res => {
        this.VencIns = res;
        localStorage.setItem("VencIns", JSON.stringify(this.VencIns));
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
    this.inventarioProd = Object.values(this.inventarioProd);
  }

  getHojaProd() {
    this.HojaProduccionService.getHojaProduccion().subscribe(
      res => {
        this.hojaprod = res;
        localStorage.setItem("hojaProd", JSON.stringify(this.hojaprod))
      },

      err => console.error(err)
    )
    this.hojaprod = JSON.parse(localStorage.getItem("hojaProd")!)
    this.hojaprod = Object.values(this.hojaprod);
  }

  getPosible() {
    this.PosiblesService.getPosibles().subscribe(
      res => {
        this.posibles = res;
        localStorage.setItem("listaPosibles", JSON.stringify(this.posibles));
      },

      err => console.error(err)
    )

    this.posibles = JSON.parse(localStorage.getItem("listaPosibles")!)
    this.posibles = Object.values(this.posibles);
  }

  getDespachados() {
    this.HojaProduccionService.getHojaProduccionEsp().subscribe(
      res => {
        this.despachados = res;
        localStorage.setItem("listaDespachados", JSON.stringify(this.despachados));
      },

      err => console.error(err)
    )

    this.despachados = JSON.parse(localStorage.getItem("listaDespachados")!)
    this.despachados = Object.values(this.despachados);
  }





}


