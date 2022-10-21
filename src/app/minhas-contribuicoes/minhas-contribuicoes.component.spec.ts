import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasContribuicoesComponent } from './minhas-contribuicoes.component';

describe('MinhasContribuicoesComponent', () => {
  let component: MinhasContribuicoesComponent;
  let fixture: ComponentFixture<MinhasContribuicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasContribuicoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasContribuicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
