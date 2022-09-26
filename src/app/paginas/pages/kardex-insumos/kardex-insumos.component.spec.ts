import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexInsumosComponent } from './kardex-insumos.component';

describe('KardexInsumosComponent', () => {
  let component: KardexInsumosComponent;
  let fixture: ComponentFixture<KardexInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexInsumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KardexInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
