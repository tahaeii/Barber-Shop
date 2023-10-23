import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }

  user!: string;

  getUserName(userName : string) {
    // this.flag++;
    this.user = userName ;
  }

  isUser : boolean = false;
}
