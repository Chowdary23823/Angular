import {
  Compiler,
  CompilerFactory,
  COMPILER_OPTIONS,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './RouteingComponents/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientsComponent } from './RouteingComponents/patients/patients.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './RouteingComponents/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, RouterModule, AppRoutingModule,ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    PatientsComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    
    AuthService,
  ],
})
export class AppModule {}

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
