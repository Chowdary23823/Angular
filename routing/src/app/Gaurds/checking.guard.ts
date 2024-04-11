import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Injector } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service'; // Assuming AuthService is defined

export const checkingGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return true;
};
