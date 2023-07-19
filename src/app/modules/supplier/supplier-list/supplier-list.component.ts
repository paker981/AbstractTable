import { Component } from '@angular/core';
import { FORM_TOKEN } from 'src/app/tokens/form-token';
import { SupplierForm } from '../form-supplier';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from 'src/app/shared/dialogs/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [ 
    
  ]
})
export class SupplierListComponent {

  constructor(private dialog: MatDialog){}


  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {width: '400px', height: '200px'})
  }
}
