import { CanActivateFn } from '@angular/router';
import { FansService } from '../services/fans.service';
import { inject } from '@angular/core';

export const fansExist: CanActivateFn = (route, state) => {
  let id : number = route.params['id'];
  const _fansService : FansService = inject(FansService);
  try {
    _fansService.get(id);
    return true;
  } catch {
    return false;
  }
};
