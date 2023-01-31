import { Component } from '@angular/core';
import * as ProductData from '../../../assets/data/product-data.json'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productData: any[] = ProductData;
}
