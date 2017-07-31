import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";



@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a routerLink='/' class="navbar-brand">StockView</a>
      </div>
    </div>
  </nav>

  `,
  styles: [`
    .navbar {
      height: 60px;
    }
    .navbar-brand {
      color: #FFE4C4;
      padding: 19px 15px;
      font-size: 1.8em;
    }
    a {
      cursor: pointer;
    }
  `]
})

export class HeaderComponent {
  constructor() {}


}
