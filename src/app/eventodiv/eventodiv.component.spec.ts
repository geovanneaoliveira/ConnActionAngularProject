import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventodivComponent } from './eventodiv.component';

describe('EventodivComponent', () => {
  let component: EventodivComponent;
  let fixture: ComponentFixture<EventodivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventodivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventodivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
