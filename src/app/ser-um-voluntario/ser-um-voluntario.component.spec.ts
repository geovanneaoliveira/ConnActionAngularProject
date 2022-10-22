import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerUmVoluntarioComponent } from './ser-um-voluntario.component';

describe('SerUmVoluntarioComponent', () => {
  let component: SerUmVoluntarioComponent;
  let fixture: ComponentFixture<SerUmVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerUmVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerUmVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
