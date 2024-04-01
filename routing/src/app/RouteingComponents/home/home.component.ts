import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  pserive:AuthService;
  constructor(private service:AuthService) {
    this.pserive = service;
   }

  ngOnInit() {
    this.get();
  }
  checked()
  {
    this.service.canShowChild = !this.service.canShowChild;
  }

  get()
  {
    console.log("get in home called");
     this.service.getData().subscribe(res=>{
      this.data = res;
    })
    
    console.log(this.data);
  }

}