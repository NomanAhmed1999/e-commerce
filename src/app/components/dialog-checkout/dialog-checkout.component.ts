import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dialog-checkout',
  templateUrl: './dialog-checkout.component.html',
  styleUrls: ['./dialog-checkout.component.scss']
})
export class DialogCheckoutComponent {

  // email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('', [Validators.required, Validators.required]);
  myForm: any;
  responseMessage: any;


  constructor(
    public dialogRef: MatDialogRef<DialogCheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    console.log('daa', this.data);
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.required]),
      contactNo: new FormControl('', [Validators.required, Validators.required]),
      address: new FormControl('', [Validators.required, Validators.required]),
      email: new FormControl(''),
      message: new FormControl(''),
      product: new FormControl(this.data.product)
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('Valid?', this.myForm.valid); // true or false
    console.log('Name', this.myForm.value);

     // if (this.form.status == "VALID" && this.honeypot.value == "") {
      // this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("Customer Name", this.myForm.get("name").value);
      formData.append("Customer Email", this.myForm.get("email").value);
      formData.append("Customer Contact Number", this.myForm.get("contactNo").value);
      formData.append("Customer Address", this.myForm.get("address").value);
      formData.append("Message", this.myForm.get("message").value);
      this.myForm.value.product.map((product: any, indx: number) => {
        formData.append(`Product ${indx+1} Name`, product.productName);
        formData.append(`Product ${indx+1} Price`, product.price);
        formData.append(`Product ${indx+1} quantity`, product.quantity);
      });
      const emailTemplate = `
      <html>
        <head>
          <style>
            /* Add email styling here */
          </style>
        </head>
        <body>
          <h1>New Message</h1>
          <p><strong>Name:</strong> Name</p>
          <p><strong>Email:</strong> email</p>
          <p><strong>Message:</strong> message</p>
        </body>
      </html>
    `;
      // this.isLoading = true; // sending the post request async so it's in progress
      // this.submitted = false; // hide the response message on multiple submits
      this.http.post('https://script.google.com/macros/s/AKfycbzZVHSVXgkRJt5Ba4b0OQYys-kOsj1YKjmtfa4trXcGn3lrkNUKk6c_3ixIOlx6Qy3v2g/exec', formData).subscribe(
        (response: any) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          // this.form.enable(); // re enable the form after a success
          // this.submitted = true; // show the response message
          // this.isLoading = false; // re enable the submit button
          console.log(response);
          console.table(formData);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          // this.form.enable(); // re enable the form after a success
          // this.submitted = true; // show the response message
          // this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
  }


}
