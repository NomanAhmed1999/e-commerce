import { Component } from '@angular/core';
import * as Products from '../../../assets/data/product-data.json';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any = Products;
  originalProductsList: any = [];
  singleProduct: any = {};
  productCategories: any = [];

  data: any = [];

  ngOnInit(){
    this.originalProductsList = this.products[0].data;
    this.singleProduct = this.originalProductsList[2];
    console.log('product', this.originalProductsList);
    this.preparedData();
  }

  constructor(private prdSvc: ProductsService, private router: Router){

  }

  // preparedData(){
  //   let filter = this.originalProductsList.forEach((item: any) => {
  //     this.data.forEach((itemData: any, i: number) => {
  //       if(itemData.category !== item.itemCategory){
  //         itemData.category = item.itemCategory;
  //       }else{

  //       }
  //     })
  //   })

  // }

  async preparedData(){
        this.productCategories = this.prdSvc.getCategoriesData();
        this.productCategories.forEach((element: any, i: number) => {
          let nweData = {
            category: element,
            data: []
          }
          this.data[i] = nweData;
        });
        this.data.forEach((e: any) => {
          let filter = this.originalProductsList.forEach((prd: any) => {
            if(prd.itemCategory == e.category){
              e.data.push(prd);
            }
          })
          console.log('filterProducts', this.data);
        });
  }


  openCategory(e: any){
    this.router.navigate(['products'])
  }





}
