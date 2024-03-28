import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { HelpComponent } from '../RouteingComponents/help/help.component';


@Injectable({
  providedIn:'root'
})
export  class CanDeactivateGaurd implements CanDeactivate<any>{
  
  constructor(private service:AuthService)
  {

  }
  canDeactivate(component : any) :boolean{
  return false;
};
}
