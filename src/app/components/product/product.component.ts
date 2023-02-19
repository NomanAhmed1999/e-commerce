import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: any;
  test: any;

  constructor(private router: Router){

  }


  ngAfterViewInit(){
  }

  openProduct(product: any){
    // this.router.navigate([`product/`],{ queryParams: { id: product.id }})
    this.router.navigate([`product/`, product.id]
    
    )
  }
}
