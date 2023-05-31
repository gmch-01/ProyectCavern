import { Component, OnInit, ViewChild } from '@angular/core';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import { InventarioProdService } from 'src/app/services/inventarioprod.service';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-product-barr',
  templateUrl: './product-barr.component.html',
  styleUrls: ['./product-barr.component.css']
})
export class ProductBarrComponent implements OnInit {

  datos: any 
  insumo: string = 'harina'

  constructor(private inventarioProdService: InventarioProdService) {
  }
  datitos: any[] = []
  datitosN: any[] = []
  datitosF: any[] = []

  
  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvProductoEsp")!)
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
      { data: this.datitosN , label: 'cantidad de Productos' },
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
      this.datitos[i] = this.datos[i].productoInv
    }
    for(let i = 0 ; i< this.datos.length; i++) {
      this.datitosN[i] = this.datos[i].existencia
    }

  }

}
