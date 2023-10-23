import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {


  constructor(private _formBuilder: FormBuilder) {
    this.minDate = new Date();

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 10);
  }

  valu: string = '';


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  showSelectedDateComponent = false;

  onDateChange(event: any) {
    this.showSelectedDateComponent = true;
  }

  minDate !: Date;
  maxDate !: Date;


  selected !: Date | null;

  selectedAnimalCategory: string = ''; // مقدار انتخابی ذخیره می‌شود
  displayedValue: string = ''; // مقداری که در اینپوت نمایش داده می‌شود


  selectCategory(category: string) {
    this.selectedAnimalCategory = category;
    this.displayedValue = category;
  }



}
