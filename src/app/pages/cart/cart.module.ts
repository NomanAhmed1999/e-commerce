import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ShareComponentsModule } from 'src/app/components/share-components/share-components.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ShareComponentsModule,
    MatDialogModule
  ]
})
export class CartModule { }
