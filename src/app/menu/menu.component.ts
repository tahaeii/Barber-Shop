import { Component } from '@angular/core';
import { UsernameService } from '../username.service';
import { SectionPopupComponent } from '../section-popup/section-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(public username: UsernameService , public dialog: MatDialog) { 
    // UsernameService
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SectionPopupComponent,{
      width: '640px',disableClose: true 
    });
  }

}
