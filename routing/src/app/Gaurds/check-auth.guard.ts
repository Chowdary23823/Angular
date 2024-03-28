import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckAuth implements CanActivate {
  constructor(private authService: AuthService,private router:Router ) {}

  canActivate() {
    if(this.authService.isLoggedIn)
      return this.authService.isLoggedIn;
    else
      return this.router.navigate(['login']);;
  }
}
