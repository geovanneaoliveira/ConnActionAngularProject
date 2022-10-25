import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgInfosComponent } from './org-infos.component';

describe('OrgInfosComponent', () => {
  let component: OrgInfosComponent;
  let fixture: ComponentFixture<OrgInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
