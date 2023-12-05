import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../../abilities/pop-up/pop-up.component';

@Component({
  selector: 'app-fourth-stepper',
  templateUrl: './fourth-stepper.component.html',
  styleUrls: ['./fourth-stepper.component.css']
})
export class FourthStepperComponent {

  constructor(public dialog: MatDialog){}

  nameShow !: string;
  emailShow !: string;
  password !: number;

  name(value: string) {
    this.nameShow = value;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent,{
      width: '340px',disableClose: true 
    });
  } // PopUp

}
