import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    // this.minDate = new Date();

    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate() + 10);
  }

  selectedAnimalCategory: string = '';
  displayedValue: string = '';

  selectCategory(category: string) {
    this.selectedAnimalCategory = category;
    this.displayedValue = category;
  }
  // Save & Show MenuButton In Input


}
