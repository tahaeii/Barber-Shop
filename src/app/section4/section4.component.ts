import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ServiceService } from '../service.service';
import * as moment from 'moment';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  @ViewChild('stepper') stepper !: MatStepper;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  goToNextStep() {
    this.stepper.next();
  }


  constructor(public _formBuilder: FormBuilder, public srvc: ServiceService,public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent,{
      width: '340px',disableClose: true 
    });
  }



  ngOnInit(): void {

  }

  

  resetService() {
    // this.loadDate = false;
    // this.diasableButton = true;
    // this.srvc.setSelected([]);
    // this.visibleServices = 6;
  }

  nameShow !: string;
  emailShow !: string;
  password !: number;

  name(value: string) {
    this.nameShow = value;
  }

}
