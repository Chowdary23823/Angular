import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pserive:AuthService;
  constructor(private service:AuthService) {
    this.pserive = service;
   }

  ngOnInit() {
  }
  checked()
  {
    this.service.canShowChild = !this.service.canShowChild;
  }

}