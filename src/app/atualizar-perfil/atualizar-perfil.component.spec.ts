import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPerfilComponent } from './atualizar-perfil.component';

describe('AtualizarPerfilComponent', () => {
  let component: AtualizarPerfilComponent;
  let fixture: ComponentFixture<AtualizarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
