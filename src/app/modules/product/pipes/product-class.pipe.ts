import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productClass'
})
export class ProductClassPipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value === 'boolean') {
      return value ? 'green-text' : 'red-text';
    }
    return 'default-text';
  }

}
