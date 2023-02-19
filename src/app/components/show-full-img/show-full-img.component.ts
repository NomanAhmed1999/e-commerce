import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'show-full-img',
  templateUrl: './show-full-img.component.html',
  styleUrls: ['./show-full-img.component.scss']
})
export class ShowFullImgComponent {
  @Input() img: string = '';
  @Output() imgClose = new EventEmitter<boolean>();

  closeImg(){
    console.log('close');
    
    this.imgClose.emit(false);
  }

}
