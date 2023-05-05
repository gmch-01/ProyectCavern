import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { InventarioInsService } from 'src/app/services/inventarioins.service';
import { LineasComponent } from '../lineas/lineas.component';


import DataLabelsPlugin from 'chartjs-plugin-datalabels';




@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})


export class BarrasComponent implements OnInit {

  datos: any 
  insumo: string = 'harina'

  constructor(private inventarioInsService: InventarioInsService) {
  }
  datitos: any[] = []
  datitosN: any[] = []
  datitosF: any[] = []

  
  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvInsumoEsp")!)
    this.datos = Object.values(this.datos);

    this.getDatos();
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true, };
  public barChartPlugins = [
    DataLabelsPlugin ];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.datitos,
    datasets: [
      { data: this.datitosN , label: 'cantidad de insumos' },
    ]
  };
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  getDatos () {
    for(let i = 0 ; i< this.datos.length; i++) {
      this.datitos[i] = this.datos[i].nombre
    }
    for(let i = 0 ; i< this.datos.length; i++) {
      this.datitosN[i] = this.datos[i].existencia
    }

  }

  proximosVencer() {

    for(let i = 0 ; i< this.datos.length; i++) {
      this.datitosF[i] = this.datos[i].fecha_vencimiento
    }

  
  }
query: any
dquery: any
  datosQuery(x: string){
    this.inventarioInsService.getInventarioInsidChart(x).subscribe(
      res => {
        this.query= res
        localStorage.setItem("RespQuery", JSON.stringify(this.query))
      },
      err => console.log(err)
    )
    this.query = JSON.parse(localStorage.getItem("RespQuery")!)
    this.query = Object.values(this.query);
    return this.query
  }




}
