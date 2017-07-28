import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

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
        title : { text : 'Stocks' },
        series : Series,
        chart: {
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
      this.stockService.newStockAdded
      .subscribe(
        (stock: Stock) => {
          this._chart.addSeries({
            id: stock.name,
            name: stock.name,
            data: stock.data
          });
        }
      )
      this.stockService.StockRemoved
      .subscribe(
        (stock: Stock) => {
          this._chart.get(stock.name).remove();
        }
      )
      })


    }


  public ngOnDestroy() {
    this._chart.destroy();
  }


}
