import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedOutPageComponent } from './signed-out-page.component';

describe('SignedOutPageComponent', () => {
  let component: SignedOutPageComponent;
  let fixture: ComponentFixture<SignedOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignedOutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
