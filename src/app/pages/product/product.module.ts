import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ShareComponentsModule } from 'src/app/components/share-components/share-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ShareComponentsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class ProductModule { }
