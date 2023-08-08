import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Router, Route,RouterStateSnapshot, UrlSegment} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {

  constructor(  private authService: AuthService,
                private router: Router){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {


      return this.authService.verificaAutenticacion()
                .pipe(
                  tap( estaAutenticado => {
                    if(!estaAutenticado){
                      this.router.navigate(['./auth/login']);
                    }
                  })
                );

      // if(this.authService.auth.id){
      //   return true;
      // }

      // console.log('bloqueado por el AuthGuard - CanActivate');
      // return false;
  }

  // el canload solo sirve para prevenir que el usuario recargue el modulo
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean { 

      return this.authService.verificaAutenticacion().pipe(
        tap( estaAutenticado => {
          if(!estaAutenticado){
            this.router.navigate(['./auth/login']);
          }
        })
      );
    
    //   if(this.authService.auth.id){
    //     return true;
    //   }

    //   console.log('bloqueado por el AuthGuard - CanLoad');
    // return false;
  }
}
