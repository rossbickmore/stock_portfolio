import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StockService} from '../../services/stock.service'
import {Stock} from '../../stock'
@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartLegend = true;

  portfolio: Stock[] = this.stockService.getPortfolio()
  constructor(
    private stockService: StockService
  ) { }
  options = ['earnings', 'revenue']
  selectedOption = this.options[0]

  lineChartData: ChartDataSets[] = []
  lineChartLabels: Label[] = []
  ngOnInit() {
    this.createChartData(this.selectedOption, this.portfolio)
  }

  createChartData(option, array) {
    // get chart labels
    this.lineChartData = []
    this.lineChartLabels = []
    console.log(option, array)
    array[0].earnings.forEach( dataPoint => {
      this.lineChartLabels.push(dataPoint.date)
    })
    // get data sets
    array.forEach( stock => {
      let obj = {data: [], label: stock.name}
      stock.earnings.forEach( dataPoint => {
        obj.data.push(dataPoint[option].raw / 1000000000)
      })
      this.lineChartData.push(obj)
    })
  }

  lineChartOptions = {
    responsive: true,
  };

  setOption(option) {
    this.selectedOption = option
    this.createChartData(this.selectedOption, this.portfolio)
  }

}
