export class Stock {
  constructor(
          public name: string,
          public data: Array<number>,
          public start_date: string,
          public end_date: string,
          public id?: number
  ) {}

}
