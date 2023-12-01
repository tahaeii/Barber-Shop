import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
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

  // ngOnInit() {
  //     const script = this.render.createElement('script');
  //     script.src = 'assets/menuscript.js';
  //     this.render.appendChild(this.elmn.nativeElement, script);
  // } // Show the swiper code


  navbarSticky = false;

  ngOnInit() {
    this.username.scrollPosition$.subscribe(scrollPos => this.navbarSticky = scrollPos > 0);
    const script = this.render.createElement('script');
    script.src = 'assets/menuscript.js';
    this.render.appendChild(this.elmn.nativeElement, script);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_event: Event) {
    // Optional: Add any additional handling if needed
  }// Fixed Menu After Scroll
}
