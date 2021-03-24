import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhNumUpdateComponent } from './ph-num-update.component';

describe('PhNumUpdateComponent', () => {
  let component: PhNumUpdateComponent;
  let fixture: ComponentFixture<PhNumUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhNumUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhNumUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
