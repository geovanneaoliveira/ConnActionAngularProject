import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSupervisorComponent } from './org-supervisor.component';

describe('OrgSupervisorComponent', () => {
  let component: OrgSupervisorComponent;
  let fixture: ComponentFixture<OrgSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
