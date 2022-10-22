import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContribuicaoComponent } from './criar-contribuicao.component';

describe('CriarContribuicaoComponent', () => {
  let component: CriarContribuicaoComponent;
  let fixture: ComponentFixture<CriarContribuicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarContribuicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarContribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
