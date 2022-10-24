import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTagsEventosComponent } from './set-tags-eventos.component';

describe('SetTagsEventosComponent', () => {
  let component: SetTagsEventosComponent;
  let fixture: ComponentFixture<SetTagsEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTagsEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTagsEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
