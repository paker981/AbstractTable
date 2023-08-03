import { CommonModule } from '@angular/common';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject, Subject } from 'rxjs';
import { TemplateWithId } from 'src/app/directives/template-with-id.directive';
import { Product } from 'src/app/interfaces/product.interface';
import { Supplier } from 'src/app/interfaces/supplier.interface';
import { TextFormatRowPipe } from 'src/app/pipes/text-format-row.pipe';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RecordTableComponent } from './record-table/record-table/record-table.component';

@Component({
  selector: 'app-abstract-table',
  templateUrl: './abstract-table.component.html',
  styleUrls: ['./abstract-table.component.css'],
  imports: [
    CommonModule,
    MaterialModule,
    TextFormatRowPipe,
    RecordTableComponent
  ],
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush
  // smart/dump
})
export class AbstractTableComponent {
  @Input() data!: any;

  @ContentChild(TemplateRef) customButton!: TemplateRef<any>;
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChildren(TemplateWithId) templatesWithId!: QueryList<TemplateWithId>;

  @Output() edit = new EventEmitter<any>();
  @Output() remove = new EventEmitter<any>();
  test$ = new BehaviorSubject(1);

  constructor(private cd: ChangeDetectorRef){}

  getRecordTemplate(id: any): TemplateRef<any> | undefined {
    return this.templatesWithId.find((template) => template.id === id)?.template
  }
  
  onEdit(row: any) {
    this.test$.next(2);
    this.cd.detectChanges(); // markForCheck
    this.edit.emit(row);
  }

  onRemove(row: any) {
    this.remove.emit(row);
  }
}
