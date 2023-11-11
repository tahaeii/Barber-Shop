import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(public srvc: ServiceService) { }

  showLoader: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 100);
  }

  isSelected !: boolean; // is service-body selected?
  dateSelected: string[] = []; // save the service-body's id
  diasableButton = true;



  datee: any = [
    {
      id: 1,
      title: 'Facial Cleansing',
      time: '12.30 pm - 13.00 pm',
      avable: 4,
      isSelected: false
    },
    {
      id: 2,
      title: 'Skin Cleansing',
      time: '13.10 pm - 14.00 pm',
      avable: 3,
      isSelected: false
    },
    {
      id: 3,
      title: 'Beard Trimming',
      time: '14.15 pm - 15.30 pm',
      avable: 1,
      isSelected: false
    },
    {
      id: 4,
      title: 'Hair Cut',
      time: '16.00 pm - 17.20 pm',
      avable: 2,
      isSelected: false
    },
  ]

  selectedDate(date: any) {
    date.isSelected = !date.isSelected;
    if (date.isSelected) {
      this.srvc.saveDateSelected(date.id);
    } else {
      this.srvc.removeDateSelected(date.id);
    }
    this.diasableButton = this.srvc.dataSelectedCheck().length <= 0;
    // For disable & anable button when user dont select servise
  }

  nexStepper() {
    this.srvc.fillReservedData();
  }
  
}
