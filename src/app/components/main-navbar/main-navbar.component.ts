import { Component } from '@angular/core';
import * as navBarData from '../../../assets/data/navbarData.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})

export class MainNavbarComponent {
  navData: any[] = navBarData;

  constructor(private router: Router){

  }

  ngOnInit(){

  }

  navigateTo(link: any){
    this.router.navigate([link])
  }

}
