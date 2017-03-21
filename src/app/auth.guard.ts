import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Auth } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.authenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}