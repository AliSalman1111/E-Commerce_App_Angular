import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryResponse } from '../../models/categories/icategory.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private readonly httpClient=inject(HttpClient);


  getCategories():Observable<ICategoryResponse> {
    return this.httpClient.get<ICategoryResponse>(environment.base_url+'categories');

  }
  
}
