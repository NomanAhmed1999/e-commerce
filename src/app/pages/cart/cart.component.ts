import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: any = [];


  ngOnInit(){
    this.getData();
  }
  
  getData(){
    this.products = localStorage.getItem('prd-for-buy');
    if(this.products){
      this.products = JSON.parse(this.products);
    }
  }

}
