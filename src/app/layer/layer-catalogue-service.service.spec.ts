import { TestBed } from '@angular/core/testing';

import { LayerCatalogueServiceService } from './layer-catalogue-service.service';

describe('LayerCatalogueServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayerCatalogueServiceService = TestBed.get(LayerCatalogueServiceService);
    expect(service).toBeTruthy();
  });
});
