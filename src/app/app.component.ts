import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ProductListComponent } from './component/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent],
  template: `
    <app-header></app-header>
    <app-product-list></app-product-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}