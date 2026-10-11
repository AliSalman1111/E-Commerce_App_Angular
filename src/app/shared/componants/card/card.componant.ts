import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/ptoducts/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.componant.html',
  styleUrl: './card.componant.css',
})
export class CardComponant {

@Input() cardProduct:Product={} as Product
}
