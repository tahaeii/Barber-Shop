import { Component } from '@angular/core';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent {

  reserved = [
    {
      id: 1,
      date: 'Today',
      servicesOne: 'Head',
      servicesTwo:'Face Correction',
      price : 43,
      describe: 'With supporting text below as a natural lead-in to additional content',
      fTime: '12.00 pm',
      tTime:'13.00 pm',
      isActive: true
    },
    {
      id: 2,
      date: 'Jun 27',
      servicesOne: 'Hair Cut',
      servicesTwo:'',
      price : 43,
      describe: 'With supporting text below as a natural lead-in to additional content',
      fTime: '13.30 pm',
      tTime:'14.00 pm',
      isActive: false
    },
    {
      id: 3,
      date: 'Jun 1',
      servicesOne: 'Hair Wash',
      servicesTwo:'Cleansing',
      price : 39,
      describe: 'With supporting text below as a natural lead-in to additional content',
      fTime: '13.30 pm',
      tTime:'14.00 pm',
      isActive: false
    },
    {
      id: 4,
      date: 'May 30',
      servicesOne: 'Face Correction',
      servicesTwo:'',
      price : 29,
      describe: 'With supporting text below as a natural lead-in to additional content',
      fTime: '13.30 pm',
      tTime:'14.00 pm',
      isActive: false
    },
    {
      id: 5,
      date: 'Apr 18',
      servicesOne: 'Beard',
      servicesTwo:'Keratin',
      price : 40,
      describe: 'With supporting text below as a natural lead-in to additional content',
      fTime: '13.30 pm',
      tTime:'14.00 pm',
      isActive: false
    },
    
  ]

  visibleServices: number = 3;
  loadMore() {
    this.visibleServices += 5;
  } // Load more button

}
