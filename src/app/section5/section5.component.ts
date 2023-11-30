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

    products: any = [
        {
            id: 1,
            image: { url: 'assets/product/1.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },
        {
            id: 2,
            image: { url: 'assets/product/2.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },
        {
            id: 3,
            image: { url: 'assets/product/3.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },
        {
            id: 4,
            image: { url: 'assets/product/4.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },
        {
            id: 5,
            image: { url: 'assets/product/5.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },
        {
            id: 6,
            image: { url: 'assets/product/6.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },
        {
            id: 7,
            image: { url: 'assets/product/7.jpg' },
            alt: '',
            head: 'consectetur "',
            describe: '',
        },

    ]

}