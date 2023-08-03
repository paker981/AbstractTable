import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormatRow',
  standalone: true
})
export class TextFormatRowPipe implements PipeTransform {
  transform(value: any): any {
  if (this.isDate(value)) {
    // For date type, format as DD-MM-YYYY HH:mm
    const day = this.formatNumber(value.getDate());
    const month = this.formatNumber(value.getMonth() + 1); // Months are 0-indexed
    const year = value.getFullYear();
    const hours = this.formatNumber(value.getHours());
    const minutes = this.formatNumber(value.getMinutes());
    return `${day}-${month}-${year} ${hours}:${minutes}`;
    } 
    return value;
  }


private formatNumber(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

private isDate(value: any): value is Date {
  return value instanceof Date;
}

}