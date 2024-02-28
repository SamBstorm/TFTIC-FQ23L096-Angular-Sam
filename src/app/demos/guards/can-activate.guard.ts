import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { inject } from '@angular/core';

export const mustBeLogged: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  return Boolean(_authService.currentUser);
};

export const mustBeAnonymous: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  return !Boolean(_authService.currentUser);
};

//SI et Seulement SI nous devons rediriger l'utilisateur dans un cas précis
export const mustBeLoggedWithRedirect: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  const _router : Router = inject(Router);
  if(!Boolean(_authService.currentUser)){
    _router.navigate(['notFound']);
    return false;
  }
  return true;
};

//SI et Seulement SI nous devons rediriger l'utilisateur dans un cas précis
export const mustBeAnonymousWithRedirect: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  const _router : Router = inject(Router);
  if(Boolean(_authService.currentUser)){
    _router.navigate(['notFound']);
    return false;
  }
  return true;
};
