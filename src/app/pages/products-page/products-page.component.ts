import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from 'src/app/components/product/product.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  productCategories: any = [];
  productList: any = [];
  originalProductList: any = [];
  productData = [];
  filteredproductList = [];
  @ViewChild(ProductComponent) child!: ProductComponent;
  
  constructor(public prdSvc: ProductsService){

  }

  ngOnInit(){
    if(this.prdSvc.categoryList.length>0){
      this.productCategories = this.prdSvc.categoryList;
    }else{
      this.productCategories = this.prdSvc.getCategoriesData();
    }
    this.getAllProducts();
  }

  async getAllProducts(){
    let data = await this.prdSvc.getAllProducts();
    if(data && data.length > 0){
      this.productList = data;
    }
  }

  async changeTab(e: any){
    if(e.tab.textLabel == 'ALL'){
      this.filteredproductList = [];
      this.productList = this.originalProductList;
      this.getAllProducts();
    }else{
      // setTimeout(() => {
        this.getAllProducts();
        let filterProducts = await this.productList.filter((prd: any) => {
          return prd.itemCategory == e.tab.textLabel
        });
        this.filteredproductList = filterProducts;
      // }, 500);
    }
    
      
  }

  

}
