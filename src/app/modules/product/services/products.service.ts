import { Injectable } from '@angular/core';
import { products } from '../../../environment/data';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../interfaces/product.interface';

@Injectable()
export class ProductsService {
  // private _data$ = BehaviorSubject
  // data = this._data$.asObservable
  data = new BehaviorSubject<Product[]>(products); // rename na data
 
  constructor() { 

    // TODO: cold/hot observables
    // TODO: zmiana folderu dla ProductsService
    // BehaviorSubject
    // sub1
    // subject => emituje 1
    // subject => emituje 2
    // sub2
  }

  updateIndex(list: Product[]){
    list.forEach((product,index) => product.id = index)
  }

  // Metoda usuwająca element z listy
  remove(product: Product): void {
    const newList = this.data.getValue().filter(productInList => productInList.id !== product.id);
    this.updateIndex(newList);
    this.data.next(newList);
  }
  
  // Metoda edytująca element w liście
  edit (product: Product): void {
    const list = this.data.getValue();
    const productToUpdate = list.find(productInList => productInList.id === product.id);
  
    if (!productToUpdate) {
      return;
    }
    
    productToUpdate.name = product.name;
    productToUpdate.description = product.description
    productToUpdate.inStock = product.inStock;
    productToUpdate.lastModified = new Date();
    this.data.next([...list]);
  }

  changeState(id: number){
    const list = this.data.getValue();
    const productToUpdate = list.find(productInList => productInList.id === id);

    if (!productToUpdate) {
      return;
    }

    productToUpdate.inStock = !productToUpdate.inStock;
    productToUpdate.lastModified = new Date();
    this.data.next([...list]);
  }

}
