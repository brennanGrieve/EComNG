import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageReviewDisplayComponent } from './average-review-display.component';

describe('AverageReviewDisplayComponent', () => {
  let component: AverageReviewDisplayComponent;
  let fixture: ComponentFixture<AverageReviewDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageReviewDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageReviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
