import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBarrComponent } from './product-barr.component';

describe('ProductBarrComponent', () => {
  let component: ProductBarrComponent;
  let fixture: ComponentFixture<ProductBarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
