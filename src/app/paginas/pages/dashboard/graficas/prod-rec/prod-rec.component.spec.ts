import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRecComponent } from './prod-rec.component';

describe('ProdRecComponent', () => {
  let component: ProdRecComponent;
  let fixture: ComponentFixture<ProdRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
