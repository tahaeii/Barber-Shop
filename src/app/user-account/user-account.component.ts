import { Component } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {

  showPrfl = false;
  showRsrvd = false;

  profile(){
    this.showPrfl = true;
    this.showRsrvd = false;
  }
  reserved(){
    this.showRsrvd = true;
    this.showPrfl = false;
  }
}
