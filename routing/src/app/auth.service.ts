import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  canShowChild: boolean = false;
  usname: string = 'kushal';
  pword: string = 'kushal';
  constructor() {
    
  }
}
