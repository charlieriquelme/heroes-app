import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap,map } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;
  private baseUrl: string = environment.baseUrl;

  get auth(): Auth{
    return {...this._auth! }
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe( 
        map(auth => {
          this._auth = auth;
          return true;
        })
      );
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
              .pipe(
                  // el tap sirve para crear efectos secundarios dentro de una observable
                  tap(auth => this._auth = auth), 
                  tap(auth => localStorage.setItem('token', auth.id))
              );
  }
}
