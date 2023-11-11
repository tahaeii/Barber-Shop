import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private selected: number[] = []; // save the service-body's id

  selectedCheck(): number[] {
    return this.selected;
  }

  setSelected(empty: number[]): void {
    this.selected = empty;
  }

  saveSelected(id: number): void {
    this.selected.push(id);
    console.log(this.selected);
  }

  removeSelected(itemId: number): void {
    this.selected = this.selected.filter(id => id !== itemId);
    console.log(this.selected)
  }

  // ////////////////////////////////////////////////////////////

  public user!: string; // the name of user
  public isUser: boolean = false; // is it user login
  private userName: string = ''; // user data
  private userEmail: string = ''; // user data
  private userPassword: number = 0; // user data

  getUserName(userName: string) {
    this.user = userName;
  }

  setUserData(name: string, email: string, password: number) {
    this.userName = name;
    this.userEmail = email;
    this.userPassword = password;
    this.isUser = true;
    this.getUserName(this.userName);
  }

  // ////////////////////////////////////////////////////////////

  private dateSelected: number[] = []; // save the service-body's id

  dataSelectedCheck(): number[] {
    return this.dateSelected;
  }

  saveDateSelected(id: number): void {
    this.dateSelected.push(id);
    console.log(this.dateSelected);
  }

  removeDateSelected(itemId: number): void {
    this.dateSelected = this.dateSelected.filter(id => id !== itemId);
    console.log(this.dateSelected)
  }

  reservedData = [
    {
      name : this.user,
      services : this.selected,
      date : this.dateSelected,
    }
  ]

  fillReservedData(): void {
    this.reservedData = [
      {
        name: this.user,
        services: this.selected,
        date: this.dateSelected,
      }
    ];
    console.log(this.reservedData)
  }
  
  
}
