import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { InventarioInsService } from 'src/app/services/inventarioins.service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-despachados',
  templateUrl: './despachados.component.html',
  styleUrls: ['./despachados.component.css']
})
export class DespachadosComponent implements OnInit {


  constructor(private inventarioInsService: InventarioInsService) {
  }

  datos: any
  datitos: any[] = []
  datitosN: any[] = []
  datitosDesp: any[] = []
  datitosF: any[] = []
  existe: any
  falta: any

  public doughnutChartLabels: string[] = ['Falta Despachar', 'Deschado'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.datitosDesp,
        borderWidth: 1
      },

    ]
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaDespachados")!)
    this.datos = Object.values(this.datos);
    console.log(this.datos, "los despachados")
    this.getDatos();
  }

  getDatos() {
    this.datitosDesp[0] = this.datos[0].recetas_hoy - this.datos.length
    this.datitosDesp[1] = this.datos.length

  }

  proximosVencer() {

    for (let i = 0; i < this.datos.length; i++) {
      this.datitosF[i] = this.datos[i].fecha_vencimiento
    }


  }




}
