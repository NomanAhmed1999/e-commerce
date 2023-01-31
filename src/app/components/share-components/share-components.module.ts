import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponentsComponent } from './share-components.component';
import { SliderComponent } from '../slider/slider.component';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
import { CategoryCartComponent } from '../category-cart/category-cart.component';
import { ProductComponent } from '../product/product.component';



@NgModule({
    declarations: [
        ShareComponentsComponent,
        SliderComponent,
        MainNavbarComponent,
        CategoryCartComponent,
        ProductComponent
    ],
    exports: [
        ShareComponentsComponent
    ],
    providers: [
        SliderComponent,
        MainNavbarComponent,
        CategoryCartComponent,
        ProductComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ShareComponentsModule { }