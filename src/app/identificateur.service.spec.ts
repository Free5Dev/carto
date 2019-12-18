import { TestBed } from '@angular/core/testing';

import { IdentificateurService } from './identificateur.service';

describe('IdentificateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentificateurService = TestBed.get(IdentificateurService);
    expect(service).toBeTruthy();
  });
});
