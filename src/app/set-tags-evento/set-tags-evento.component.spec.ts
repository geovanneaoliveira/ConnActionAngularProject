import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTagsEventoComponent } from './set-tags-evento.component';

describe('SetTagsEventoComponent', () => {
  let component: SetTagsEventoComponent;
  let fixture: ComponentFixture<SetTagsEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTagsEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTagsEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
