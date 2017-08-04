import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import * as io from "socket.io-client";

import {StockService} from "../stock.service";
import {Stock} from "../stock.model";

var Highcharts = require('highcharts/highstock');
(<any>window).Highcharts = Highcharts;
require('highcharts/modules/exporting')(Highcharts);


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartyComponent implements AfterViewInit {
  constructor(private stockService: StockService) {
  }

  private urla: string = 'http://localhost:4000';
  private urlb: string = 'https://stock-view-.herokuapp.com';

  socket = io(this.urlb);
  @ViewChild('chart') public chartEl: ElementRef;
  private _chart: any;

  public ngAfterViewInit() {
    this.stockService._getStocks()
    .subscribe((stocks: Stock[]) => {
      var Series: Array<Object> = [];
      stocks.forEach(function(stock) {
        var seriesOption = {
          id: stock.name,
          name: stock.name,
          data: stock.data
        }
        Series.push(seriesOption);
      })
      var options = {
        // title : { text : 'Stocks' },
        series : Series,
        chart: {
          // backgroundColor: ,
          borderColor: '#FFE4C4',
          borderWidth: 1,
          height: 500,
          type: 'line',
          renderTo: this.chartEl.nativeElement
        },
        scrollbar: {
          showfull: true
        },
        plotOptions: {
          series: {
            showInNavigator: true
          }
        }
      }
      this._chart = new Highcharts.StockChart(options);
      this.socket.on('new-stock', (data)=> {
        var socketdata = data.message;
        this._chart.addSeries({
          id: socketdata.name,
          name: socketdata.name,
          data: socketdata.data
        })
      })
      this.socket.on('delete-receive', (data) => {
        var socketdelete = data.message;
        this._chart.get(socketdelete.name).remove();
        })
      })
    }


  public ngOnDestroy() {
    this._chart.destroy();
  }


}
