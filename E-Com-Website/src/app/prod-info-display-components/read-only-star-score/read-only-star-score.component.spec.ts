import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyStarScoreComponent } from './read-only-star-score.component';

describe('ReadOnlyStarScoreComponent', () => {
  let component: ReadOnlyStarScoreComponent;
  let fixture: ComponentFixture<ReadOnlyStarScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadOnlyStarScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyStarScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
