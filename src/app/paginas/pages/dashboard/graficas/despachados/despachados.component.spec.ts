import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachadosComponent } from './despachados.component';

describe('DespachadosComponent', () => {
  let component: DespachadosComponent;
  let fixture: ComponentFixture<DespachadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespachadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
