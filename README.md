# auth0-lock-redirect-issue

Reproducing issue with auth0-lock. There're 2 pages: index and profile. Profile is protected, only the logged in user can access it.
The app works mostly as expected, however, there's login issue after unauthenticated user visits the profile page (add path in URL).

Steps to reproduce:
1. Clone repo.
2. Install dependencies
```
npm install
```
3. Install Angular CLI
```
npm install -g @angular/cli
```
4. Run the app
```
ng serve --open
```
> Note: if you get an error on first compile, update some file in src/app folder to recompile, then you'll get success.
5. Go to index page at localhost:4200, login (username: noubadyels@gmail.com, password: 12345). Make sure login works as expected and profile link is visible,
2. Logout.
3. Append "/profile" to the URL. You should be redirected to the index page.
4. Try to login again. This should fail without any error messages.

## Progress
So far I've figured that "authenticated" event is not fired, meaning that the authentication is not successful. The culprit must be in the redirect chain somewhere, as if I set redirect option to false in Auth0Lock configuration, everything works as expected
