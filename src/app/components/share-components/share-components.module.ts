import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponentsComponent } from './share-components.component';
import { SliderComponent } from '../slider/slider.component';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
import { CategoryCartComponent } from '../category-cart/category-cart.component';
import { ProductComponent } from '../product/product.component';
import { FooterComponent } from '../footer/footer.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ShowFullImgComponent } from '../show-full-img/show-full-img.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [
        ShareComponentsComponent,
        SliderComponent,
        MainNavbarComponent,
        CategoryCartComponent,
        ProductComponent,
        FooterComponent,
        SingleProductComponent,
        ShowFullImgComponent
    ],
    exports: [
        ShareComponentsComponent
    ],
    providers: [
        SliderComponent,
        MainNavbarComponent,
        CategoryCartComponent,
        ProductComponent,
        FooterComponent,

    ],
    imports: [
        CommonModule,
        MatIconModule,
    ]
})
export class ShareComponentsModule { }