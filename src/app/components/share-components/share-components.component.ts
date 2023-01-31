import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-components',
  templateUrl: './share-components.component.html',
  styleUrls: ['./share-components.component.scss']
})
export class ShareComponentsComponent {
  @Input() enableComponent: String = '';



}
