import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ShareComponentsModule } from 'src/app/components/share-components/share-components.module';


@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    ShareComponentsModule,
    MatTabsModule
  ]
})
export class ProductsPageModule { }
