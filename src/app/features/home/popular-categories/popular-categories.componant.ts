
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
 import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


import { ICategory } from '../../../core/models/categories/icategory.interface';

@Component({
  selector: 'app-popular-categories',
  imports: [CarouselModule],
  templateUrl: './popular-categories.componant.html',
  styleUrl: './popular-categories.componant.css',
})


export class PopularCategoriesComponant implements OnInit {


  private readonly categoryService=inject(CategoryService);

  catecoryList: WritableSignal<ICategory[]> = signal<ICategory[]>([]);


  ngOnInit(): void {

    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.catecoryList.set(response.data);

        console.log(this.catecoryList());
      },
      error: (err) => {
        console.log(err);
      }
    });

    
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: true,
    autoplayTimeout:3000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
