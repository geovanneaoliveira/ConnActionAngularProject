import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoSupervisorComponent } from './evento-supervisor.component';

describe('EventoSupervisorComponent', () => {
  let component: EventoSupervisorComponent;
  let fixture: ComponentFixture<EventoSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
