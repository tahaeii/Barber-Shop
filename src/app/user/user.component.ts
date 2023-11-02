import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router, private srvc: ServiceService) { };

  nameValue: string = '';
  emailValue!: string;
  passwordValue!: number;

  getUser() {

    this.srvc.setUserData(this.nameValue, this.emailValue, this.passwordValue);

    this.nameValue = '';
    this.emailValue = '';
    this.passwordValue = 0;

    this.srvc.isUser = true;

    this.router.navigate(['/']);

    // Local Storage Code For Remember Me
    // localStorage.setItem('user' , JSON.stringify(this.dataUser));

  }
}
