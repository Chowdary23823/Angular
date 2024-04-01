import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export  class canActivateChildGuard implements CanActivateChild{
  
  constructor(private service:AuthService)
  {

  }
  canActivateChild(
    
  ): Observable<boolean > {
    if(this.service.canShowChild)
      return  of(true);
    else{
      alert("The Childs Can't be shown, enable it in home component");
      return of(false);
    }

  }
  }
