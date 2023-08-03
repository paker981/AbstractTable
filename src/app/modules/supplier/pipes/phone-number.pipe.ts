import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {
    transform(value: number): string | number {
      const chunks = value.toString().match(/.{1,3}/g);
      return chunks ? chunks.join('-') : value
    }
}


