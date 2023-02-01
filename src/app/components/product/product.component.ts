import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data: any;
  test: any;


  ngAfterViewInit(){
    console.log('ngViewAfterInit', this.data);
  }

  testing(){
    
  }
}
