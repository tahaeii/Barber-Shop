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
            categories: 'Hair',
            lPrice: 325,
            product: 'Morgans',
            nPrice: 298,
            available: '3',
            stars: 4,
        },
        {
            id: 2,
            image: { url: 'assets/product/2.jpg' },
            alt: '',
            categories: 'Beard',
            lPrice: 1099,
            product: 'Repellendus',
            nPrice: 998,
            available: '11',
            stars: 3.5,
        },
        {
            id: 3,
            image: { url: 'assets/product/3.jpg' },
            alt: '',
            categories: 'Cleansing',
            lPrice: 210,
            product: 'Morgans',
            nPrice: 186,
            available: '4',
            stars: 4.5,
        },
        {
            id: 4,
            image: { url: 'assets/product/4.jpg' },
            alt: '',
            categories: 'Hair',
            lPrice: 1099,
            product: 'Speriam',
            nPrice: 999,
            available: '1',
            stars: 2,

        },
        {
            id: 5,
            image: { url: 'assets/product/5.jpg' },
            alt: '',
            categories: 'Hair',
            lPrice: 1050,
            product: 'Dignissimos',
            nPrice: 999,
            available: '7',
            stars: 3,
        },
        {
            id: 6,
            image: { url: 'assets/product/6.jpg' },
            alt: '',
            categories: 'Coloring',
            lPrice: 83,
            product: 'Consectetur',
            nPrice: 79,
            available: '2',
            stars: 2.5,
        },
        {
            id: 7,
            image: { url: 'assets/product/7.jpg' },
            alt: '',
            categories: 'Hair',
            lPrice: 199,
            product: 'Adipisicing',
            nPrice: 98,
            available: '9',
            stars: 3.5,
        },

    ]

}