import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import * as io from "socket.io-client";

import {StockService} from "./stock.service";
import {Stock} from "./stock.model";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: [`
    .searchCont {
      min-width: 300px
    }
    #search {
      min-width: 100px;
      margin-right: 0px;
      margin-left: 15px;
      padding: 8px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border: 1px solid #777;

    }
    #but {
      margin: -1px;
      padding: 7px;
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
  private urla: string = 'http://localhost:4000';
  private urlb: string = 'https://stock-view-.herokuapp.com';

  socket = io(this.urlb);

  ngOnInit() {
    this.stockService.getStocks()
    .subscribe((stocks: Stock[]) => {
      this.stocks = stocks.reverse();
    })
    this.socket.on('new-stock', (data) => {
      var socketdata = data.message;
      var newStock = new Stock(socketdata.name,
                            socketdata.data,
                            socketdata.start_date,
                            socketdata.end_date,
                            socketdata.desc,
                            socketdata.id,
                            socketdata.today)
      this.stocks.unshift(newStock);
    })
    this.socket.on('delete-receive', (data) => {
      var socketdelete = data.message;
      var deletedStock = new Stock(socketdelete.name,
                            socketdelete.data,
                            socketdelete.start_date,
                            socketdelete.end_date,
                            socketdelete.desc,
                            socketdelete.id,
                            socketdelete.today)
      var nameArr: Array<string> = [];
      this.stocks.forEach((stock) => {
        nameArr.push(stock.name)
      })
      var it = nameArr.indexOf(deletedStock.name)
      this.stocks.splice(it, 1);
    })
  }

  getaStock(stock) {
    this.searchValue = null;
    this.stockService.getStock(stock)
    .subscribe((stock: Stock) => {
      this.stockService.addStock(stock)
      .subscribe((addedStock: Stock) => {
        this.socket.emit('save-stock', addedStock);
      })
    })
  }

}
