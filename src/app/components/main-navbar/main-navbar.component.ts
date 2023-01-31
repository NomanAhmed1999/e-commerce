import { Component } from '@angular/core';
import * as navBarData from '../../../assets/data/navbarData.json'

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})

export class MainNavbarComponent {
  navData: any[] = navBarData;

  ngOnInit(){

  }

}
