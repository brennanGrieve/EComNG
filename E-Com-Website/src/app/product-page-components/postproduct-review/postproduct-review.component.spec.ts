import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTProductReviewComponent } from './postproduct-review.component';

describe('POSTProductReviewComponent', () => {
  let component: POSTProductReviewComponent;
  let fixture: ComponentFixture<POSTProductReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POSTProductReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTProductReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
