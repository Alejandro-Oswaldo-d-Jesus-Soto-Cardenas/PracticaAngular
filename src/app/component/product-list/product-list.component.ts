import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../product/product.model';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, ProductFormComponent, FilterPipe, FormsModule]
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Manzana', description: 'Fruta fresca', price: 3.5, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', category: 'Fruta', quantity: 10 },
    { name: 'Banana', description: 'Fruta amarilla', price: 2.0, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg', category: 'Fruta', quantity: 15 },
    { name: 'Naranja', description: 'Fruta cítrica', price: 4.0, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg', category: 'Fruta', quantity: 20 }
  ];
  filterCategory: string = '';

  addProduct(product: Product) {
    console.log('Producto recibido:', product);
    this.products.push(product);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  getCardColor(category: string) {
    return category;
  }
}