import { Component } from '@angular/core';
import * as CategoryData from '../../../assets/data/category-cart-data.json'


@Component({
  selector: 'app-category-cart',
  templateUrl: './category-cart.component.html',
  styleUrls: ['./category-cart.component.scss']
})
export class CategoryCartComponent {
categoryData: any = CategoryData;



ngOnInit(){
  
}



}
