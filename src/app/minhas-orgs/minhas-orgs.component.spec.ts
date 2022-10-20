import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasOrgsComponent } from './minhas-orgs.component';

describe('MinhasOrgsComponent', () => {
  let component: MinhasOrgsComponent;
  let fixture: ComponentFixture<MinhasOrgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasOrgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
