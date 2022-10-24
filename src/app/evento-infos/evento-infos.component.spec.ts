import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoInfosComponent } from './evento-infos.component';

describe('EventoInfosComponent', () => {
  let component: EventoInfosComponent;
  let fixture: ComponentFixture<EventoInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
