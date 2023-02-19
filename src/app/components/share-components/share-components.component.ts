import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-share-components',
  templateUrl: './share-components.component.html',
  styleUrls: ['./share-components.component.scss']
})
export class ShareComponentsComponent {
  @Input() enableComponent: String = '';
  @Input() data: any;
  @Output() returnVal = new EventEmitter<any>()

  ngOnInit(){
  }

  returnToParent(e: any){
    this.returnVal.emit(e);
  }

}
