import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})

export class DonaComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Producto 1', 'Producto 2', 'Producto 3' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] }
      ]
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
  }

}
