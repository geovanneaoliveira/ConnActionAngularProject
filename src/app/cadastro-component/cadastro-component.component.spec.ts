import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponentComponent } from './cadastro-component.component';

describe('CadastroComponentComponent', () => {
  let component: CadastroComponentComponent;
  let fixture: ComponentFixture<CadastroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
