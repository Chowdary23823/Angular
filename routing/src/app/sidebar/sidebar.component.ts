import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
authService:AuthService;
  constructor(service:AuthService) {
    this.authService = service;
   }

  ngOnInit() {
  }
  logout()
  {
    
    this.authService.isLoggedIn=false;
  }

}