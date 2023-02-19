import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  @Input() product: any = {};


  constructor(public router: Router){
    
  }



  openProduct(product: any){
    this.router.navigate([`product/`, product.id]
    )
  }

}
