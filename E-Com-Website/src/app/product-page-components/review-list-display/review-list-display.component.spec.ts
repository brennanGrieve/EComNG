import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListDisplayComponent } from './review-list-display.component';

describe('ReviewListDisplayComponent', () => {
  let component: ReviewListDisplayComponent;
  let fixture: ComponentFixture<ReviewListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewListDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
