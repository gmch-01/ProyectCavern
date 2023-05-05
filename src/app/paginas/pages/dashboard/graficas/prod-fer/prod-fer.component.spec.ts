import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFerComponent } from './prod-fer.component';

describe('ProdFerComponent', () => {
  let component: ProdFerComponent;
  let fixture: ComponentFixture<ProdFerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdFerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
