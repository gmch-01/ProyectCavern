import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdHorComponent } from './prod-hor.component';

describe('ProdHorComponent', () => {
  let component: ProdHorComponent;
  let fixture: ComponentFixture<ProdHorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdHorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdHorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
