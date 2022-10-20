import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTagsComponent } from './set-tags.component';

describe('SetTagsComponent', () => {
  let component: SetTagsComponent;
  let fixture: ComponentFixture<SetTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
