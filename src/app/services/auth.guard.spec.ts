import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('authGuard', () => {
  let authService : AuthService
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => AuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    authService = TestBed.inject(AuthService)
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
  it('should be created', () => {

    spyOn(authService, 'isAuthenticated').and.returnValue(true)
    expect(executeGuard).toBe(true);
  });




});
