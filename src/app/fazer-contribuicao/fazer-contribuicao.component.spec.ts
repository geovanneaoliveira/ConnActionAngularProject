import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerContribuicaoComponent } from './fazer-contribuicao.component';

describe('FazerContribuicaoComponent', () => {
  let component: FazerContribuicaoComponent;
  let fixture: ComponentFixture<FazerContribuicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerContribuicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazerContribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
