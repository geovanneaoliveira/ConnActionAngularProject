import { TestBed } from '@angular/core/testing';

import { ContribuicaoService } from './contribuicao.service';

describe('ContribuicaoService', () => {
  let service: ContribuicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContribuicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
