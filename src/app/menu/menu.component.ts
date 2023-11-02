import { Component } from '@angular/core';
import { SectionPopupComponent } from '../section-popup/section-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(public username: ServiceService, public dialog: MatDialog) {
    // UsernameService
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SectionPopupComponent, {
      width: '640px', disableClose: true
    });
  }

}
