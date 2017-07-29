import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import * as io from "socket.io-client";

import {StockService} from "./stock.service";
import {Stock} from "./stock.model";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: [`
    #search {
      margin-right: 0px;
      margin-left: 15px;
      padding: 8px;
      width: 250px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border: 1px solid #777;

    }
    #but {
      margin: -1px;
      padding: 7px;
      width: 50px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border: 1px solid #777;
      font-size: 1.1em;
    }
  `]
})

export class StockComponent implements OnInit {
  constructor(private stockService: StockService) {}

  stocks: Stock[] = [];
  stock: Stock;
  searchValue:string = '';
  socket = io('http://localhost:4000');


  ngOnInit() {
    this.stockService.getStocks()
    .subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    })
    this.socket.on('new-stock', (data) => {
      this.stocks.unshift(data);
    })
  }

  getaStock(stock) {
    this.searchValue = null;
    this.stockService.getStock(stock)
    .subscribe((stock: Stock) => {
      this.stockService.addStock(stock)
      .subscribe((addedStock: Stock) => {
        // this.stocks.unshift(addedStock);
        // this.stockService.emitStock(addedStock);
        this.socket.emit('save-stock', addedStock);
      })
    })
  }

}
