import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import * as moment from 'moment';
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject"
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import * as io from "socket.io-client";

import {ErrorService} from "../errors/error.service";
import {Config} from "./config";
import {Stock} from "./stock.model";

@Injectable()
export class StockService {

  constructor(private http: Http, private errorService: ErrorService) {
  }
  socket = io('http://localhost:4000');


  getStock(theStock) {
    var apiKey = process.env.API_KEY;
    const startDate = moment().subtract(1, 'year').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    return this.http.get('https://www.quandl.com/api/v3/datasets/WIKI/' + theStock + '.json?api_key=' + apiKey + '&start_date=' + startDate + '&end_date=' + endDate)
      .map((response: Response) => {
        var stocker = response.json().dataset;
        var stock = new Stock(stocker.dataset_code,
                              stocker.data,
                              stocker.start_date,
                              stocker.end_date,
                              stocker.name,
                              undefined,
                              stocker.data[0][1])
       return stock;
      })
  }

  getStocks() {
    return this.http.get('http://localhost:3000/stocks')
    .map((response: Response) => {
      var stocks = response.json().obj;
      let Stocks: Stock[] = [];
      for (let stock of stocks) {
        Stocks.push(new Stock(stock.name,
                              stock.data,
                              stock.start_date,
                              stock.end_date,
                              stock.desc,
                              stock._id,
                              stock.today
        ))
      }
      return Stocks;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    })
  }

  _getStocks() {
    return this.http.get('http://localhost:3000/stocks')
    .map((response: Response) => {
      var stocks = response.json().obj;
      let Stocks: Stock[] = [];
      for (let stock of stocks) {
        Stocks.push(new Stock(stock.name,
                              stock.data,
                              stock.start_date,
                              stock.end_date,
                              stock.desc,
                              stock._id,
                              stock.today
        ))
      }
      return Stocks;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    })
  }

  addStock(stock) {
    stock.data.forEach(function(arr, index) {
      stock.data[index] = arr.splice(0, 2);
      stock.data[index][0] = (moment(stock.data[index][0]).unix() * 1000);
    })
    stock.data.reverse();
    const body = JSON.stringify(stock);
    const headers = new Headers({'Content-Type': "application/json"})
    return this.http.post('http://localhost:3000/stocks', body, {headers: headers})
    .map((response: Response) => {
      let thisstock = response.json().obj;
      var stock = new Stock(thisstock.name,
                            thisstock.data,
                            thisstock.start_date,
                            thisstock.end_date,
                            thisstock.desc,
                            thisstock._id,
                            thisstock.today)
      return stock;

    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    })
  }

  removeStock(stock: Stock) {
    var id = stock.id;
    return this.http.delete('http://localhost:3000/stocks/' + id)
    .map((response: Response) => {
      var deletedStock = response.json().obj;
      var deleted = new Stock(deletedStock.name,
                            deletedStock.data,
                            deletedStock.start_date,
                            deletedStock.end_date,
                            deletedStock.desc,
                            deletedStock._id,
                            deletedStock.today)
      return deleted;
    })
    .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    })
  }


}
