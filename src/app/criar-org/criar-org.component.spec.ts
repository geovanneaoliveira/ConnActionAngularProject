import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarOrgComponent } from './criar-org.component';

describe('CriarOrgComponent', () => {
  let component: CriarOrgComponent;
  let fixture: ComponentFixture<CriarOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
