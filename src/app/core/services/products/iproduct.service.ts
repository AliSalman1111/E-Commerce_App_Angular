import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../models/ptoducts/product.interface';

@Injectable({
  providedIn: 'root',
})
export class IProductService {
  private  readonly httpClient=inject(HttpClient);

  getProducts():Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>('https://ecommerce.routemisr.com/api/v1/products');
  }


  
}
