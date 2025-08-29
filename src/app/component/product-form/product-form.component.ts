import { Component, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductFormComponent implements AfterViewInit {
  @Output() addProduct = new EventEmitter<Product>();
  @ViewChild('productForm', { static: false }) productForm: NgForm | undefined; // Permitimos undefined inicialmente

  name: string = '';
  description: string = '';
  price: number | null = null;
  image: string = '';
  category: string = '';
  quantity: number | null = null;

  ngAfterViewInit() {
    if (!this.productForm) {
      console.error('productForm no está inicializado');
    } else {
      console.log('productForm inicializado correctamente');
    }
  }

  onSubmit() {
    if (!this.productForm || this.productForm.invalid) {
      alert('Por favor, completa todos los campos correctamente');
      return;
    }

    if (!this.productForm.controls) {
      console.error('Controls no disponibles en productForm');
      return;
    }

    const newProduct: Product = {
      name: this.name,
      description: this.description,
      price: this.price!,
      image: this.image,
      category: this.category,
      quantity: this.quantity!
    };

    console.log('Producto emitido:', newProduct);
    this.addProduct.emit(newProduct);
    alert('Producto agregado con éxito!');
    this.productForm.reset();
  }

  // Método para verificar el estado del control de forma segura
  isControlInvalid(controlName: string): boolean {
    return this.productForm?.controls[controlName]?.invalid && this.productForm?.controls[controlName]?.touched || false;
  }
}