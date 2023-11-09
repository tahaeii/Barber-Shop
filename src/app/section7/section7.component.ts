import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
declare var $: any; // اگر از jQuery استفاده می‌کنید، jQuery را اعلام کنید
@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit, AfterViewInit {

  constructor(private rend: Renderer2, private elm: ElementRef) { }

  ngOnInit() {
    const myscript = this.rend.createElement('script');
    myscript.src = 'assets/script.js';
    this.rend.appendChild(this.elm.nativeElement, myscript);
  }

  ngAfterViewInit() {
    const defaultTabButton = document.querySelector('.portfolio-menu ul li[data-filter="*"]');
    if (defaultTabButton) {
      this.rend.addClass(defaultTabButton, 'active');
    }
  }

}
