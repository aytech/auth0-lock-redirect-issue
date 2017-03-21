# auth0-lock-redirect-issue

Reproducing issue with auth0-lock. There're 2 pages: index and profile. Profile is protected, only the logged in user can access it.
The app works mostly as expected, however, there's login issue after unauthenticated user visits the profile page (add path in URL).

Steps to reproduce:
1. On index page, try to login. Make sure login works as expected and profile link is visible,
2. Logout.
3. Append "/profile" to the URL. You should be redirected to the index page.
4. Try to login again. This should fail.

## Progress
So far I've figured that "authenticated" event is not fired, meaning that the authentication is not successful. The culprit must be in the redirect chain somewhere, as if I set redirect option to false in Auth0Lock configuration, everything works as expected
