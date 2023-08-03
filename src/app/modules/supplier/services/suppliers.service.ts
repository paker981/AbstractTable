import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Supplier } from '../../../interfaces/supplier.interface';
import { suppliers } from '../../../environment/data';

@Injectable()
export class SuppliersService {

  data = new BehaviorSubject<Supplier[]>(suppliers);

  constructor() { }

  updateIndex(list: Supplier[]){
    list.forEach((supplier,index) => supplier.id = index)
  }

  // Metoda usuwająca element z listy
  remove(supplier: Supplier): void {
    const newList = this.data.getValue().filter(supplierInList => supplierInList.id !== supplier.id);
    this.updateIndex(newList);
    this.data.next(newList);
  }
  
  // Metoda edytująca element w liście
  edit (supplier: Supplier): void {
    const list = this.data.getValue();
    const supplierToUpdate = list.find(supplierInList => supplierInList.id === supplier.id);
  
    if (supplierToUpdate) {
      supplierToUpdate.name = supplier.name;
      supplierToUpdate.score = supplier.score
      supplierToUpdate.phone = supplier.phone;
      this.data.next([...list]);
    }
  }
}
