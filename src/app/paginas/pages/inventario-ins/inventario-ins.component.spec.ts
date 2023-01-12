import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioInsComponent } from './inventario-ins.component';

describe('InventarioInsComponent', () => {
  let component: InventarioInsComponent;
  let fixture: ComponentFixture<InventarioInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
