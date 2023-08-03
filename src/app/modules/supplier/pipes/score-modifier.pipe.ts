import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreModifier'
})
export class ScoreModifierPipe implements PipeTransform {

  transform(value: number): string {
    if(value >= 0 && value <= 50){
      return 'red-text';
    }
    return 'green-text'
  }
}
