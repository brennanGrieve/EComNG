import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAddrUpdateComponent } from './ship-addr-update.component';

describe('ShipAddrUpdateComponent', () => {
  let component: ShipAddrUpdateComponent;
  let fixture: ComponentFixture<ShipAddrUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipAddrUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAddrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
