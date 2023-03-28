import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogCheckoutComponent } from 'src/app/components/dialog-checkout/dialog-checkout.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: any = [];
  isProduct: boolean = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.products = localStorage.getItem('prd-for-buy');
    if (this.products) {
      this.products = JSON.parse(this.products);
    } else {
      this.isProduct = false;
    }
  }

  checkout() {
    const dialogRef = this.dialog.open(DialogCheckoutComponent, {
      width: '50%',
      height: '90vh',
      data: {product: this.products},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}