import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from '../auth.options';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('VndCmjnZjJ43vh2Xfn3XHx1b3KA2Fjgu', 'yapparov.eu.auth0.com', options);

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, function(error: any, profile: any) {
        if (error) {
          throw new Error(error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken);
      });
    });
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}