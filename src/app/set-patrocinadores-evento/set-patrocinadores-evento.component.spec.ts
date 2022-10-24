import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPatrocinadoresEventoComponent } from './set-patrocinadores-evento.component';

describe('SetPatrocinadoresEventoComponent', () => {
  let component: SetPatrocinadoresEventoComponent;
  let fixture: ComponentFixture<SetPatrocinadoresEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPatrocinadoresEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPatrocinadoresEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
