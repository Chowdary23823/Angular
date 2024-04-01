import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
//import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
  
})
export class LoginComponent implements OnInit {
  
  authService:AuthService;
  constructor(service : AuthService) {
    this.authService = service;
  }
  loginForm = new FormGroup({
    usname: new FormControl(''),
    pword: new FormControl(''),
  });
  onLogin() {
    if (
      this.loginForm.value.usname===this.authService.usname &&
      this.loginForm.value.pword===this.authService.pword
    ) {
      
      console.log("Loggedin")
      this.authService.isLoggedIn = true;
    }
  }
  ngOnInit() {}
}
