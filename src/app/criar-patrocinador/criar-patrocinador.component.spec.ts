import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPatrocinadorComponent } from './criar-patrocinador.component';

describe('CriarPatrocinadorComponent', () => {
  let component: CriarPatrocinadorComponent;
  let fixture: ComponentFixture<CriarPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPatrocinadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
