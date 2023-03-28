import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as Products from '../../../assets/data/product-data.json';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  products: any = Products;
  originalProductsList: any = [];
  singleProduct: any = {};
  productCategories: any = [];
  swiper: any;
  data: any = [];
  // @ViewChild('swiperContainer') swiperContainer: | any;




  ngOnInit(){
    this.originalProductsList = this.products[0].data;
    this.singleProduct = this.originalProductsList[2];
    console.log('product', this.originalProductsList);
    this.preparedData();
    this.test();
  }

  constructor(private prdSvc: ProductsService, private router: Router){

  }


  ngAfterViewInit(): void {
    let swiperContainerInner: any = document.getElementById('swiperContainer0');
    // let swiperContainerInner1: any = document.getElementById('swiperContainer1');
    // let swiperContainerInner2: any = document.getElementById('swiperContainer2');
    // let swiperContainerInner3: any = document.getElementById('swiperContainer3');
    // let swiperContainerInner4: any = document.getElementById('swiperContainer4');
    // let swiperContainerInner5: any = document.getElementById('swiperContainer5');
    // let swiperContainerInner6: any = document.getElementById('swiperContainer6');
    // for (let i = 0; i < 7; i++) {
      const swiper: any = new Swiper(`swiperContainerInner`, {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroupAuto: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      
    // }
    
  }

  swiperNext(){
    const swiper: any = document.querySelector('.swiper') //.swiper;
    swiper.swiper.slideNext();
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

  test(){
    let obj = {
      name: 'abe',
      rollNo: 2,
      age: 40,
      position: 'developer'
    }
    for(let i of [obj]){
      console.log((Object.entries(obj)));
      
    }
  }





}
