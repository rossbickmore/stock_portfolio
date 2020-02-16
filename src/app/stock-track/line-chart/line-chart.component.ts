import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  
  constructor(
  ) { }
  @Input() lineChartData: any[]
  @Input() lineChartLabels: string[]

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };
}
