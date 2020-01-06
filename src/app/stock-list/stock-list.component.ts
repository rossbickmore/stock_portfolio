import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service'

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  searchTerm: string
  stock: any
  constructor(private stockService: StockService) { }

  ngOnInit() {
  }

  getStock(searchTerm: string) {
    this.stockService.getStock(searchTerm).subscribe(val => this.stock = val.price.regularMarketTime)
    return this.stock
  }

}
