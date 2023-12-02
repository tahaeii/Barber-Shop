import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-second-stepper',
  templateUrl: './second-stepper.component.html',
  styleUrls: ['./second-stepper.component.css']
})
export class SecondStepperComponent {

  @ViewChild('stepper') stepper !: MatStepper;
  @Output() goToNextStep: EventEmitter<void> = new EventEmitter<void>();


  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(public _formBuilder: FormBuilder, public srvc: ServiceService, public dialog: MatDialog) {

    // Access To Celander Dates
  }

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
      title: 'Kids Cuts',
      description: 'Drawing, cutting and styling the beard!',
      price: 14,
      pictureClass: 'service-picture-bac-7',
      isSelected: false
    },
    {
      id: 8,
      title: 'Keratin',
      description: 'Keratin & Straightening for messy & curly hair',
      price: 23,
      pictureClass: 'service-picture-bac-8',
      isSelected: false
    },
    {
      id: 9,
      title: 'All Service',
      description: 'Keratin & Straightening for messy & curly hair',
      price: 23,
      pictureClass: 'service-picture-bac-9',
      isSelected: false
    },
  ]



  // An array of objects

  isSelected !: boolean; // is service-body selected?
  selected: string[] = []; // save the service-body's id
  visibleServices: number = 6; // load more
  loadDate: boolean = false; // loading style
  loaderAnimation = false; // Spinner loader
  diasableButton = true;


  selectedService(service: any) {
    service.isSelected = !service.isSelected;
    if (service.isSelected) {
      this.srvc.saveSelected(service.id);
    } else {
      this.srvc.removeSelected(service.id);
    }
    this.diasableButton = this.srvc.selectedCheck().length <= 0;
    // For disable & anable button when user dont select servise
  }   // Select a service & save id

  loadMore() {
    this.visibleServices += 5;
  } // Load more button

  showSelectedTitles() {
    this.services.forEach(service => {
      service.isSelected = false;
    }); // Unselected Service that user was selected
    this.loaderAnimation = true;
    this.diasableButton = true;
    this.loadDate = true;

    setTimeout(() => {
      this.loaderAnimation = false;
      this.diasableButton = true;
      // this.stepper.next();
      this.goToNextStep.emit();
      // if (this.stepper) {
      //   console.log('Stepper is available:', this.stepper);
      //   this.stepper.next();
      // } else {
      //   console.error('Stepper is not available!');
      // }
    }, 3000);
    // Show Loader
  }



}

