import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Products from '../../../assets/data/product-data.json';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productId: number = 0;
  prdQty: number = 1;
  productFound: boolean = false;
  products: any = Products;
  originalProductsList: any = [];
  product: any = {};
  data: any = [];
  productCategories: any = [];
  form: any;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: any; // the response message to show to the user
  rating: number = 3;
  showFullImg: boolean = false;
  showingImg: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private prdSvc: ProductsService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.originalProductsList = this.products[0].data;
    this.preparedData();
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });



    this.originalProductsList = this.products[0].data;
    this.activatedRoute.params.subscribe(params => {
      this.productId = Number(params['id']);
      if (this.productId && this.productId > 0) {
        this.productFound = true;
        this.getFilterData();
      } else {
        this.productFound = false;
      }
    });
  }

  getFilterData() {
    let data = this.originalProductsList.filter((item: any) => item['id'] === this.productId);
    if (data && data.length > 0) {
      this.product = data[0];
      console.log('data', this.product);

    } else {
      this.productFound = false;
    }
  }



  onSubmit() {
    // if (this.form.status == "VALID" && this.honeypot.value == "") {
    this.form.disable(); // disable the form if it's valid to disable multiple submissions
    var formData: any = new FormData();
    formData.append("name", 'this.form.get("name").value');
    formData.append("email", 'this.form.get("email").value');
    formData.append("message", 'this.form.get("message").value');
    this.isLoading = true; // sending the post request async so it's in progress
    this.submitted = false; // hide the response message on multiple submits
    this.http.post('https://script.google.com/macros/s/AKfycbzZVHSVXgkRJt5Ba4b0OQYys-kOsj1YKjmtfa4trXcGn3lrkNUKk6c_3ixIOlx6Qy3v2g/exec', formData).subscribe(
      (response: any) => {
        // choose the response message
        if (response["result"] == "success") {
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        } else {
          this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
        }
        this.form.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        this.isLoading = false; // re enable the submit button
        console.log(response);
      },
      (error) => {
        this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
        this.form.enable(); // re enable the form after a success
        this.submitted = true; // show the response message
        this.isLoading = false; // re enable the submit button
        console.log(error);
      }
    );
    // }
  }


  async preparedData() {
    this.productCategories = this.prdSvc.getCategoriesData();
    this.productCategories.forEach((element: any, i: number) => {
      let nweData = {
        category: element,
        data: []
      }
      this.data[i] = nweData;
    });
    // this.data.forEach((e: any) => {
    let filter = this.originalProductsList.forEach((prd: any) => {
      // if (prd.itemCategory == e.category) {
      this.data[0].data.push(prd);
      // }
      // })
    });
  }

  openCategory(e: any) {
    this.router.navigate(['products']);
  }


  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }


  showImg(img: string, e: any) {
    this.showFullImg = e
    this.showingImg = img;
  }

  addToCart(product: any) {
    let saveToLocalStorage = {
      productName: product.productName,
      productId: product.productId,
      productImg: product.productImg,
      price: product.productPrice,
      quantity: this.prdQty,
    }
    // let storedProduct: any = JSON.stringify(localStorage.getItem('prd-for-buy'));
    let storedProduct: any = localStorage.getItem("prd-for-buy");
    // console.log(storedProduct);
    
    if (storedProduct && storedProduct.length > 0) {
      storedProduct = JSON.parse(storedProduct);
      storedProduct.push(saveToLocalStorage);
      localStorage.setItem('prd-for-buy', JSON.stringify(storedProduct));
    } else {
      let storedProduct = [];
      storedProduct.push(saveToLocalStorage);
      localStorage.setItem('prd-for-buy', JSON.stringify(storedProduct));
    }
    console.log(localStorage.getItem('prd-for-buy'));

  }


  // sendEmail(to: string, subject: string, text: string) {
  // sendEmail() {
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.gmail.com',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: 'nomanahmed0919@gmail.com',
  //       pass: 'icr34tenomanahmed0919forwork'
  //     }
  //   });

  //   const mailOptions = {
  //     from: 'nomanahmed0919@gmail.com',
  //     to: 'm.nomanahmed0919@gmail.com',
  //     subject: 'subject',
  //     text: 'text'
  //   };

  //   transporter.sendMail(mailOptions, (error: any, info: any) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log(`Email sent: ${info.response}`);
  //     }
  //   });
  // }


}
