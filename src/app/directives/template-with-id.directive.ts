import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[templateId]',
  standalone: true

})
export class TemplateWithId {
  @Input('templateId') id!: string;

  constructor(public template: TemplateRef<any>) {}
}