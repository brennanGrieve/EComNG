import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarscoreselectorComponent } from './starscoreselector.component';

describe('StarscoreselectorComponent', () => {
  let component: StarscoreselectorComponent;
  let fixture: ComponentFixture<StarscoreselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarscoreselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarscoreselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
