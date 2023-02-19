import { Component } from '@angular/core';
import * as navBarData from '../../../assets/data/navbarData.json'
import { Router } from '@angular/router';
import * as FooterData from '../../../assets/data/footer-data.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navData: any[] = navBarData;
  footerData: any[] = FooterData;
  originalFooterData: any = {};

  constructor(private router: Router) {
    this.originalFooterData = this.footerData[0].data[0];
  }

  navigateTo(link: any) {
    this.router.navigate([link])
  }

}
/*
import { Injectable } from '@angular/core';
import nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor() { }

  sendEmail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: to,
      subject: subject,
      text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }
}

*/