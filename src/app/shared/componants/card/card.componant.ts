import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/ptoducts/product.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.componant.html',
  styleUrl: './card.componant.css',
})
export class CardComponant {

@Input() cardProduct:Product={} as Product
}
