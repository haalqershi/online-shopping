import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartItemsSummaryComponent } from './shopping-cart-items-summary.component';

describe('ShoppingCartItemsSummaryComponent', () => {
  let component: ShoppingCartItemsSummaryComponent;
  let fixture: ComponentFixture<ShoppingCartItemsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartItemsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartItemsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
