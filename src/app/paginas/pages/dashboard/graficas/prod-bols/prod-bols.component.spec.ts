import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBolsComponent } from './prod-bols.component';

describe('ProdBolsComponent', () => {
  let component: ProdBolsComponent;
  let fixture: ComponentFixture<ProdBolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
