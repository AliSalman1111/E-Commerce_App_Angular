import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],
  templateUrl: './main-slider.componant.html',
  styleUrl: './main-slider.componant.css',
})
export class MainSliderComponant {


  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: true,
    autoplayTimeout:1500,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }


}
