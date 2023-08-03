import { CommonModule, KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TemplateWithId } from 'src/app/directives/template-with-id.directive';
import { AbstractTableComponent } from '../../abstract-table.component';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css'],
  imports: [
    CommonModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordTableComponent<K,T>{
  @Input({required: true}) defaultTemplate!: TemplateRef<any>;
  @Input({required: true}) data!: KeyValue<K,T>;
  @Input() templatesWithId!: QueryList<TemplateWithId>;

  getRecordTemplate(id: any): TemplateRef<any> | undefined {
    return this.templatesWithId.find((template) => template.id === id)?.template
  }
}
