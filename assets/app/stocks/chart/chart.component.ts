import { Component, OnInit, Input, AfterViewChecked, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {ChartComponent} from "angular2-highcharts"

import {StockService} from "../stock.service";
import {Stock} from "../stock.model";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartyComponent implements OnInit {
  constructor(private stockService: StockService) {
    this.stockService.getStocks()
    .subscribe((stocks: Stock[]) => {
      var Series: Array<Object> = [];
      stocks.forEach(function(stock) {
        var seriesOption = {
          name: stock.name,
          data: stock.data
        }
        Series.push(seriesOption);
        console.log(Series)
      })
      this.options = {
        title : { text : 'hello' },
        series : Series,
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            day: '%Y-%m-%d'
          }
        }
      }
    })
  }
  options: Object;

    // this.options.series[0].data = stocks[0].data;


  ngOnInit(){

  }

}
