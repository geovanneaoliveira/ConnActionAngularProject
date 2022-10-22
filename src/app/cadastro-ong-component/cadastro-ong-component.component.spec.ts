import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOngComponentComponent } from './cadastro-ong-component.component';

describe('CadastroOngComponentComponent', () => {
  let component: CadastroOngComponentComponent;
  let fixture: ComponentFixture<CadastroOngComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroOngComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroOngComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
