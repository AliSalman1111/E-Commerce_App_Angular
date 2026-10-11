import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IProductDetailsResponse } from './iproduct-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailesService {

  private readonly httpClient=inject(HttpClient);



  getSpecificProduct(id:string|null):Observable<IProductDetailsResponse>{
     
    return this.httpClient.get<IProductDetailsResponse>(environment.base_url+`products/${id}`)

  }

  
}
