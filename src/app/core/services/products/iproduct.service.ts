import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../models/ptoducts/product.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class IProductService {

  private  readonly httpClient=inject(HttpClient);

  getProducts():Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(environment.base_url+'products');
  }


  
}
