import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './RouteingComponents/about/about.component';
import { HelpComponent } from './RouteingComponents/help/help.component';
import { HomeComponent } from './RouteingComponents/home/home.component';
import { PatientComponent } from './RouteingComponents/patient/patient.component';
import { PatientsComponent } from './RouteingComponents/patients/patients.component';
import { CheckAuth } from './Gaurds/check-auth.guard';
import { CanDeactivateGaurd } from './Gaurds/can-deactivate.guard';
import { PagenotfoundComponent } from './RouteingComponents/pagenotfound/pagenotfound.component';
import { canActivateChildGuard } from './Gaurds/can-activate-child.guard';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [CheckAuth]  },
  { path: 'home', component: HomeComponent, canActivate: [CheckAuth] },
  { path: 'patients', component: PatientsComponent ,canActivateChild:[canActivateChildGuard], canActivate: [CheckAuth],
children:[
  {
    path:'home',component:PatientComponent
  }
]},
  { path: 'about', component: AboutComponent , canActivate: [CheckAuth]},
  { path: 'help', component: HelpComponent, canActivate: [CheckAuth],
canDeactivate:[CanDeactivateGaurd] ,canActivateChild:[canActivateChildGuard]},
  {path:'login',component:LoginComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
