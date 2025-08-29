import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: any[], category: string): any[] {
    if (!category || category === '') return products;
    return products.filter(product => product.category === category);
  }
}