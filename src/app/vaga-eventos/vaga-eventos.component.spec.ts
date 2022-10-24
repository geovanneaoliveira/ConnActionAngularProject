import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaEventosComponent } from './vaga-eventos.component';

describe('VagaEventosComponent', () => {
  let component: VagaEventosComponent;
  let fixture: ComponentFixture<VagaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
