import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateValue = '';
  minDate !: Date;
  maxDate !: Date;

  constructor(public srvc: ServiceService) {

    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 30);
  }// Access To Celander Dates

  myFilter = (d: Date | null): boolean => {
    // const jalaliDate = moment(d).format('jYYYY/jM/jD');
    // const dayOfWeek = moment(jalaliDate, 'jYYYY/jM/jD').day();
    // return dayOfWeek !== 5 && dayOfWeek !== 6;

    if (!d) {
      return false;
    }
    const jalaliDate = moment(d).format('dddd'); // dddd means the day of the week
    return jalaliDate !== 'جمعه';
  }// Prevent Friday and Saturday from being selected.


  ngOnInit() {

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
    // {
    //   id: 4,
    //   title: 'Hair Cut',
    //   time: '16.00 pm - 17.20 pm',
    //   avable: 2,
    //   isSelected: false
    // },
  ]

  selectedDate(date: any) {
    date.isSelected = !date.isSelected;
    this.datee.forEach((d: any) => {
      if (d.id !== date.id) {
        d.isSelected = false;
        this.srvc.removeDateSelected(d.id);
      }
    });
    this.srvc.saveDateSelected(date.id);
    this.diasableButton = this.srvc.dataSelectedCheck().length === 0 || !date.isSelected;
  }


  nexStepper() {
    this.srvc.fillReservedData();
    // console.log(this.srvc.saveData)
  }

}
