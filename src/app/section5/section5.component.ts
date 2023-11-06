import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-section5',
    templateUrl: './section5.component.html',
    styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {
        const script = this.renderer.createElement('script');
        script.src = 'assets/myscript.js';
        this.renderer.appendChild(this.el.nativeElement, script);
    } // Show the swiper code

    
}