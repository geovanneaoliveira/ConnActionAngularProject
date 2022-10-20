import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouUmaOngComponent } from './sou-uma-ong.component';

describe('SouUmaOngComponent', () => {
  let component: SouUmaOngComponent;
  let fixture: ComponentFixture<SouUmaOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouUmaOngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouUmaOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
