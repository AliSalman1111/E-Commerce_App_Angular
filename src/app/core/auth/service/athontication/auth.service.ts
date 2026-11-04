import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Iuser, IuserResponce } from '../../models/iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

private readonly httpClient=inject(HttpClient);


sendRegisterData( userData:object):Observable<IuserResponce>{

 return this.httpClient.post<IuserResponce>( environment.base_url+'auth/signup',userData)

}

  sendLoginData( userData:object):Observable<IuserResponce>{

 return this.httpClient.post<IuserResponce>( environment.base_url+'auth/signin',userData)

}
}
