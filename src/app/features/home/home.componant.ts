import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { IProductService } from '../../core/services/products/iproduct.service';
import { Product } from '../../core/models/ptoducts/product.interface';
import { CardComponant } from '../../shared/componants/card/card.componant';
import { PopularProductComponant } from './popular-product/popular-product.componant';
import { MainSliderComponant } from './main-slider/main-slider.componant';
import { PopularCategoriesComponant } from './popular-categories/popular-categories.componant';

@Component({
  selector: 'app-home',
  imports: [PopularProductComponant, MainSliderComponant, PopularCategoriesComponant],
  templateUrl: './home.componant.html',
  styleUrl: './home.componant.css',
})
export class HomeComponant  {

}
