import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-abstract-table',
  templateUrl: './abstract-table.component.html',
  styleUrls: ['./abstract-table.component.css']
})
export class AbstractTableComponent {
  @Input() data!: Product[];
  @ContentChild(TemplateRef) customButton!: TemplateRef<any>;
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;

  @Output() editRow = new EventEmitter<any>();
  @Output() removeRow = new EventEmitter<any>();

  onEdit(row: any) {
    this.editRow.emit(row);
  }

  onRemove(row: any) {
    this.removeRow.emit(row);
  }
}
