import { Component } from '@angular/core';
// import sliderData from './slider.json';
// import sliderData from '../../data/slider-data.json';
import * as SliderData from '../../../assets/data/sliderData.json';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  sliders: any[] = SliderData;


  ngOnInit() {
    console.log('slider', this.sliders[0].data);

  }






}
