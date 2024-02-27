import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { inject } from '@angular/core';

export const mustBeLogged: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  return _authService.isConnected;
};

export const mustBeAnonymous: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  return !_authService.isConnected;
};

//SI et Seulement SI nous devons rediriger l'utilisateur dans un cas précis
export const mustBeLoggedWithRedirect: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  const _router : Router = inject(Router);
  if(!_authService.isConnected){
    _router.navigate(['notFound']);
    return false;
  }
  return true;
};

//SI et Seulement SI nous devons rediriger l'utilisateur dans un cas précis
export const mustBeAnonymousWithRedirect: CanActivateFn = (route, state) => {
  const _authService : AuthentificationService = inject(AuthentificationService);
  const _router : Router = inject(Router);
  if(_authService.isConnected){
    _router.navigate(['notFound']);
    return false;
  }
  return true;
};
