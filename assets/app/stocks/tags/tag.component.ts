import { Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import * as io from "socket.io-client";

import {StockService} from "../stock.service";
import {Stock} from "../stock.model";


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})

export class TagComponent {
  constructor(private stockService: StockService) {}

  socket = io('http://localhost:4000');
  @Input() stock: Stock;

  deleteStock() {
    this.stockService.removeStock(this.stock)
    .subscribe((stock: Stock) => {
      this.socket.emit('delete-send', stock);
    })
  }

}
