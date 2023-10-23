import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router, private username: UsernameService) { };

  nameValue: string = '';
  emailValue!: string;
  passwordValue!: number;

  userName: string = '';
  userEmail: string = '';
  userPassword: number = 0;

  getUser() {

    this.userName = this.nameValue;
    this.username.getUserName(this.userName);
    this.userEmail = this.emailValue;
    this.userPassword = this.passwordValue;

    console.log(this.nameValue);
    console.log(this.userEmail);
    console.log(this.userPassword);

    this.nameValue = '';
    this.emailValue = '';
    this.passwordValue = 0;

    this.username.isUser = true;

    this.router.navigate(['/']);

    // Local Storage Code For Remember Me
    // localStorage.setItem('user' , JSON.stringify(this.dataUser));

  }
}
