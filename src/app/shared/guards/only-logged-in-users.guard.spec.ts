import { TestBed } from '@angular/core/testing';

import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';

describe('OnlyLoggedInUsersGuard', () => {
  let guard: OnlyLoggedInUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyLoggedInUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
