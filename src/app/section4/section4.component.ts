import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Data } from '@angular/router';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component {

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

  // Draft Start ***********************************************************

  // selected !: Date | null;

  // Celander

  // minDate !: Date;
  // maxDate !: Date;
  // showSelectedDateComponent = false;

  // onDateChange(event: any) {
  //   this.showSelectedDateComponent = true;
  // }

  constructor(private _formBuilder: FormBuilder) {
    // this.minDate = new Date();

    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate() + 10);

    // Access To Celander Dates
  }

  // Grooming: string = '';
  // otherServicesValue: string = '';

  // groomingSelect(category: string) {
  //   this.Grooming = category;
  //   this.showSelectedDateComponent = true;
  // }

  // servicesSelect(category: string) {
  //   this.otherServicesValue = category;
  //   this.showSelectedDateComponent = true;
  // }
  // Save & Show MenuButton In Input


  // disableSelect = new FormControl(false);

  // Disable Grooming & OtherServices Button & Input

  // shwCmpnnt(event: any) {
  //   if (event.checked) {
  //     this.showSelectedDateComponent = true;
  //   } else {
  //     this.showSelectedDateComponent = false;
  //   }
  // }

  // Disable Grooming & OtherServices Button & Input When Radio
  // Button Will Be True !

  // Draft End ***********************************************************
  // Draft was for old design !
  // Again Start ..

  services = [
    {
      id: 1,
      title: 'Hair Cut',
      description: 'A simple makeup for your hair plus a styling!',
      price: 12,
      pictureClass: 'service-picture-bac-1',
      isSelected: false
    },
    {
      id: 2,
      title: 'Beard Trim',
      description: 'Drawing, cutting and styling the beard!',
      price: 9,
      pictureClass: 'service-picture-bac-2',
      isSelected: false
    },
    {
      id: 3,
      title: 'Cleansing',
      description: 'Facial Cleansing for clean pore skin',
      price: 15,
      pictureClass: 'service-picture-bac-3',
      isSelected: false
    },
    {
      id: 4,
      title: 'Hair Wash',
      description: 'Hair Massage & Washing hair plus a styling!',
      price: 10,
      pictureClass: 'service-picture-bac-4',
      isSelected: false
    },
    {
      id: 5,
      title: 'Coloring',
      description: 'Drawing, cutting and styling the beard!',
      price: 13,
      pictureClass: 'service-picture-bac-5',
      isSelected: false
    },
    {
      id: 6,
      title: 'Photography',
      description: 'Keratin & Straightening for messy & curly hair',
      price: 17,
      pictureClass: 'service-picture-bac-6',
      isSelected: false
    },
    {
      id: 7,
      title: 'Coloring',
      description: 'Drawing, cutting and styling the beard!',
      price: 13,
      pictureClass: 'service-picture-bac-5',
      isSelected: false
    },
    {
      id: 8,
      title: 'Photography',
      description: 'Keratin & Straightening for messy & curly hair',
      price: 17,
      pictureClass: 'service-picture-bac-6',
      isSelected: false
    },
  ]
  // An array of objects

  isSelected !: boolean;
  selectedTitles: string[] = [];
  visibleServices: number = 6;
  diasableButton = true;
  showSpinner = false;
  loadDate: boolean = false;

  selectedService(service: any) {
    service.isSelected = !service.isSelected;
    if (service.isSelected) {
      this.selectedTitles.push(service.id);
    } else {
      this.selectedTitles = this.selectedTitles.filter(id => id !== service.id);
    }
    this.diasableButton = this.selectedTitles.length <= 0;
    // For disable & anable button when user dont select servise
  }   // Select a service & save id

  loadMore() {
    this.visibleServices += 2;
  } // Load more button

  showSelectedTitles() {
    this.services.forEach(service => {
      service.isSelected = false;
    }); // Unselected Service that user was selected
    this.showSpinner = true;
    this.diasableButton = true;
    this.loadDate = true;

    setTimeout(() => {
      this.showSpinner = false;
      this.diasableButton = false;
      this.stepper.next();
    }, 3000);
    // Show Loader
  }

  resetService() {
    this.loadDate = false;
    this.visibleServices = 6;
  }
}
