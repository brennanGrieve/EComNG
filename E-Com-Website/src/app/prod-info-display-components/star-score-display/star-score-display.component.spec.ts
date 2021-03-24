import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarScoreDisplayComponent } from './star-score-display.component';

describe('StarScoreDisplayComponent', () => {
  let component: StarScoreDisplayComponent;
  let fixture: ComponentFixture<StarScoreDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarScoreDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
