import { Component } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(public username: UsernameService) { 
    // UsernameService
  }

}
