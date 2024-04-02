import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';




@NgModule({
  declarations: [
    
    UsersComponent,
    UserComponent
  ],
  imports: [
    RouterModule,
    UsersRoutingModule

  ]

})
export class UsersModule { }
