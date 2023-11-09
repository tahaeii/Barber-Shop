import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public username: ServiceService, private render: Renderer2, private elmn: ElementRef) {
    // UsernameService
  } 

  ngOnInit() {
      const script = this.render.createElement('script');
      script.src = 'assets/menuscript.js';
      this.render.appendChild(this.elmn.nativeElement, script);
  } // Show the swiper code

}
