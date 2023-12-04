import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(public srvc: ServiceService, private render: Renderer2, private elmn: ElementRef) { }

  navbarSticky = false;

  ngOnInit() {
    this.srvc.scrollPosition$.subscribe(scrollPos => this.navbarSticky = scrollPos > 0);
    const script = this.render.createElement('script');
    script.src = 'assets/menuscript.js';
    this.render.appendChild(this.elmn.nativeElement, script);
  } // Sub Menu Js

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_event: Event) {
  }// Fixed Menu After Scroll
}
