import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-img',
  templateUrl: './dialog-img.component.html',
  styleUrls: ['./dialog-img.component.scss']
})

export class DialogImgComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogImgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(){
    console.log('daa', this.data);
  }

  closeModal(){
    this.dialogRef.close();
  }



}
