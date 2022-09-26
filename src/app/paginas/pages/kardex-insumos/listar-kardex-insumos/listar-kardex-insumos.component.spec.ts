import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarKardexInsumosComponent } from './listar-kardex-insumos.component';

describe('ListarKardexInsumosComponent', () => {
  let component: ListarKardexInsumosComponent;
  let fixture: ComponentFixture<ListarKardexInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarKardexInsumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarKardexInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
