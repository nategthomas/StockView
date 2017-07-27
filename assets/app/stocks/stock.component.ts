import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {StockService} from "./stock.service";
import {Stock} from "./stock.model";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: [`
  
  `]
})

export class StockComponent implements OnInit {
  constructor(private stockService: StockService) {}

  stocks: Stock[] = [];
  stock: Stock;

  ngOnInit() {
    this.stockService.getStocks()
    .subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    })

  }

  getaStock(stock) {
    this.stockService.getStock(stock)
    .subscribe((stock: Stock) => {
      this.stockService.addStock(stock)
      .subscribe((addedStock: Stock) => {
        this.stocks.unshift(addedStock);
      })
    })
  }

}
