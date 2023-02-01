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
    console.log('data', data);
    
    if(data && data.length > 0){
      this.productList = data;
    }
  }

  changeTab(e: any){
    console.log('e', e.tab.textLabel);
    if(e.tab.textLabel == 'ALL'){
      this.productList = this.originalProductList;
      this.getAllProducts();
      
    }else{
      this.getAllProducts();
      let filterProducts = this.productList.filter((prd: any) => {
        return prd.itemCategory == e.tab.textLabel
      });
      this.productList = filterProducts;
    }
    console.log('asa', ProductComponent);
    
      
  }

}
