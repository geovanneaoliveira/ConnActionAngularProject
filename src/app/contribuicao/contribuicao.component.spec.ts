import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuicaoComponent } from './contribuicao.component';

describe('ContribuicaoComponent', () => {
  let component: ContribuicaoComponent;
  let fixture: ComponentFixture<ContribuicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
