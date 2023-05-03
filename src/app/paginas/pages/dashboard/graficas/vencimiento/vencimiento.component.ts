import { Component, OnInit, ViewChild, ɵLocaleDataIndex } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-vencimiento',
  templateUrl: './vencimiento.component.html',
  styleUrls: ['./vencimiento.component.css']
})
export class VencimientoComponent implements OnInit {

  datos: any

  constructor() {
  }
  datitos: any[] = []
  datitosN: any[] = []
  datitosF: any[] = []


  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("VencIns")!)
    this.datos = Object.values(this.datos);
    this.getDatos();
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y', 
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    },

    backgroundColor: (chart: any) => {
      const value: any = chart.dataset.data[chart.dataIndex];
      if (value < 10) {
        return 'rgba(255, 99, 132, 0.5)';
      } else if (value >= 11 && value < 60) {
        return 'rgba(255, 205, 86, 0.5)';
      } else {
        return 'rgba(75, 192, 192, 0.5)';
      }
    }

  };

  public barChartPlugins = [
    DataLabelsPlugin];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: this.datitos,
    datasets: [
      {
        data: this.datitosN,
        label: 'Dias para Vencimiento'
      },
    ]
  };
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }



  getDatos() {
    for (let i = 0; i < this.datos.length; i++) {

      this.datitos[i] = this.datos[i].nombre
    }
    for (let i = 0; i < this.datos.length; i++) {
      if (this.datos[i].dias_restantes < 0) {
        this.datitosN[i] = 0
      }
      else {

        this.datitosN[i] = this.datos[i].dias_restantes
      }
    }
  }

  color(): string {

    var value = this.datitosN[1];
    if (value < 60) {
      return 'rgba(255, 99, 132, 0.5)';
    } else if (value >= 60 && value < 90) {
      return 'rgba(255, 205, 86, 0.5)';
    } else {
      return 'rgba(75, 192, 192, 0.5)';
    }
    return ''
  }


}