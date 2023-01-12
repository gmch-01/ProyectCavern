import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioProdComponent } from './inventario-prod.component';

describe('InventarioProdComponent', () => {
  let component: InventarioProdComponent;
  let fixture: ComponentFixture<InventarioProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
