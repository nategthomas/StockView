import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import {StockService} from "./stocks/stock.service";
import {StockComponent} from "./stocks/stock.component";
import {HeaderComponent} from "./header.component";


@NgModule({
    declarations: [AppComponent,
                  StockComponent,
                  HeaderComponent],

    imports: [BrowserModule,
              HttpModule,
              FormsModule,
              ReactiveFormsModule
            ],
            
    providers: [StockService],

    bootstrap: [AppComponent],
})
export class AppModule {

}
