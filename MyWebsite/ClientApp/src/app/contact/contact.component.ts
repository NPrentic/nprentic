import { Component, OnInit } from '@angular/core';
import { EmailService } from '../Services/email-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: Email = {
    name: "",
    company: "",
    phoneNumber: "",
    emailAddress: "",
    message: ""
  }

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  sendEmail(): void {
    this.emailService.sendEmail(this.email)
      .subscribe(res => { alert('Email is sent!') });
  }

}
