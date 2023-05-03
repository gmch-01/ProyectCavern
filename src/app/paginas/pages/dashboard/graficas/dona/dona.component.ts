import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, ChartConfiguration } from 'chart.js';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})

export class DonaComponent implements OnInit {

  datos: any 
  datitos: any[] = []
  datitosN: any[] = []
  datitosF: any[] = []
  existe: any
  falta:any

    public doughnutChartLabels: string[] = [ 'existe', 'falta' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels ,
      datasets: [
        { data: this.datitosN,
          borderWidth: 1}
      ]
    };

    public pieChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        }}
    };
    public doughnutChartType: ChartType = 'doughnut';
  
    // events
    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }
  constructor() { }

  ngOnInit(): void {
    this.datos = JSON.parse(localStorage.getItem("listaInvInsumoChart")!)
    this.datos = Object.values(this.datos);
    this.getDatos();
  }

  getDatos () {

    this.datitosN[0]= this.datos[0].existencia
    this.datitosN[1]= this.datos[0].falta
  }

}

