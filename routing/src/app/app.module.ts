import {
  Compiler,
  CompilerFactory,
  COMPILER_OPTIONS,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

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
import { HelpComponent } from './RouteingComponents/help/help.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [ MatCardModule,MatButtonModule,MatFormFieldModule, MatInputModule ,BrowserModule, RouterModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    PatientsComponent,
    LoginComponent,
    PagenotfoundComponent,
    HelpComponent,
PagenotfoundComponent,
PatientsComponent,


  ],
  bootstrap: [AppComponent],
  providers: [
    
    AuthService,
          provideAnimationsAsync('noop'),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
