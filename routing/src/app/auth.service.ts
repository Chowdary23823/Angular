import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:7038/Category/GetAllCategories"
  //apiUrl = "https://jsonplaceholder.typicode.com/posts";
  isLoggedIn: boolean = false;
  canShowChild: boolean = false;
  usname: string = 'kushal';
  pword: string = 'kushal';
  data : any;
  constructor(public http: HttpClient) {
    
  }
  getData(){
    console.log("get in service called")
    return this.http.get(this.apiUrl);
  }
}
