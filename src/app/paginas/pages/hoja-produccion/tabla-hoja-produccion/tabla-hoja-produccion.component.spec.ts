import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHojaProduccionComponent } from './tabla-hoja-produccion.component';

describe('TablaHojaProduccionComponent', () => {
  let component: TablaHojaProduccionComponent;
  let fixture: ComponentFixture<TablaHojaProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaHojaProduccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaHojaProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
