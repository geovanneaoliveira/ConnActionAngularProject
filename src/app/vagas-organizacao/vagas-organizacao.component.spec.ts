import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasOrganizacaoComponent } from './vagas-organizacao.component';

describe('VagasOrganizacaoComponent', () => {
  let component: VagasOrganizacaoComponent;
  let fixture: ComponentFixture<VagasOrganizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasOrganizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasOrganizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
