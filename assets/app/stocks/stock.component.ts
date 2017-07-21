import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {StockService} from "./stock.service";


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: [`

  `]
})

export class StockComponent {
  constructor(private stockService: StockService) {}

  getaStock(stock) {
    this.stockService.getStock(stock)
    .subscribe((stock: any) => {
      console.log(stock.dataset);
    })
  }

}
