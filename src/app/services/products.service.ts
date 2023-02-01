import { Injectable } from '@angular/core';
import * as Products from '../../assets/data/product-data.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any = Products;
  categoryList: any = [];

  constructor() { }


  getCategoriesData(){
    this.products[0].data.map((item: any, index: number) => {
      let include = this.categoryList.indexOf(item.itemCategory);
      if(include < 0){
        this.categoryList.push(item.itemCategory);
      }
    });
    return this.categoryList
  }

  getAllProducts(){
    return this.products[0].data;
  }


}
