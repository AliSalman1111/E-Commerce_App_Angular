import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { IProductService } from '../../core/services/products/iproduct.service';
import { Product } from '../../core/models/ptoducts/product.interface';
import { CardComponant } from '../../shared/componants/card/card.componant';

@Component({
  selector: 'app-home',
  imports: [CardComponant],
  templateUrl: './home.componant.html',
  styleUrl: './home.componant.css',
})
export class HomeComponant implements OnInit {

private readonly iProductService =inject(IProductService);

productlist:WritableSignal<Product[]> = signal<Product[]>([]);

ngOnInit(): void {
  this.iProductService.getProducts().subscribe({
    next:(response)=>{
      
      this.productlist.set(response.data);
    },
    
    error:(err)=>{
      console.log(err);
    }
  });



}}
