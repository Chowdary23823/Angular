import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Category } from '../../Model/Category';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  
  

  addCategory = new FormGroup({
    idofcategory: new FormControl(),
    name : new FormControl(),
    desc : new FormControl()
  });

  newObj :Category={
    Id: 4,
    Name:'c4',
    Description: 'desc4',
  }


  constructor(public service : AuthService) { }
  onSubmit()
  {
    console.log(this.addCategory.value);
    
    this.newObj.Id = this.addCategory.value.idofcategory;
    this.newObj.Name = this.addCategory.value.name;
    this.newObj.Description = this.addCategory.value.desc;

    this.service.postCategory(this.newObj).subscribe({
      next:(res)=>{
        console.log("Submitted")
      }
    })
  }
  ngOnInit() {
    
  }

}