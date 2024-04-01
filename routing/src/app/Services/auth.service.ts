import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Model/Category';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:7038/Category/GetAllCategories"
  //apiUrl = "https://jsonplaceholder.typicode.com/posts";
  apiUrlPost="https://localhost:7038/Category/NewCategory"
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

  postCategory(data:Category)
  {
    return this.http.post(this.apiUrlPost ,data);
  }
}
