import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import {StockService} from "./stocks/stock.service";
import {StockComponent} from "./stocks/stock.component";
import {HeaderComponent} from "./header.component";
import {TagComponent} from "./stocks/tags/tag.component";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {ChartyComponent} from "./stocks/chart/chart.component";




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
              ReactiveFormsModule
            ],

    providers: [
                StockService,
                ErrorService,
                ],

    bootstrap: [AppComponent],
})
export class AppModule {

}
