import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  selected !: Date | null;

  // Celander

  minDate !: Date;
  maxDate !: Date;
  showSelectedDateComponent = false;

  onDateChange(event: any) {
    this.showSelectedDateComponent = true;
  }

  constructor(private _formBuilder: FormBuilder) {
    this.minDate = new Date();

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 10);

    // Access To Celander Dates
  }

  Grooming: string = '';
  otherServicesValue: string = '';

  groomingSelect(category: string) {
    this.Grooming = category;
    this.showSelectedDateComponent = true;
  }

  servicesSelect(category: string) {
    this.otherServicesValue = category;
    this.showSelectedDateComponent = true;
  }
  // Save & Show MenuButton In Input


  disableSelect = new FormControl(false);

  // Disable Grooming & OtherServices Button & Input

  shwCmpnnt(event: any) {
    if (event.checked) {
      this.showSelectedDateComponent = true;
    } else {
      this.showSelectedDateComponent = false;
    }
  }

  // Disable Grooming & OtherServices Button & Input When Radio
  // Button Will Be True !


}
