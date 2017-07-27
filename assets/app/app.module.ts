import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from "highcharts";
import * as stock from "highcharts/modules/stock";

import { AppComponent } from "./app.component";
import {StockService} from "./stocks/stock.service";
import {StockComponent} from "./stocks/stock.component";
import {HeaderComponent} from "./header.component";
import {TagComponent} from "./stocks/tags/tag.component";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {ChartyComponent} from "./stocks/chart/chart.component";

// declare var require: any;

export function highchartsFactory() {
  // Initialize addons.
  stock(highcharts);
  return highcharts;
}



@NgModule({
    declarations: [AppComponent,
                  StockComponent,
                  HeaderComponent,
                  TagComponent,
                  ErrorComponent,
                  ChartyComponent
                ],

    imports: [BrowserModule,
              HttpModule,
              FormsModule,
              ReactiveFormsModule,
              ChartModule
            ],

    providers: [
                {
                  provide: HighchartsStatic,
                  useFactory: highchartsFactory
                },
                StockService,
                ErrorService,
                ],

    bootstrap: [AppComponent],
})
export class AppModule {

}
