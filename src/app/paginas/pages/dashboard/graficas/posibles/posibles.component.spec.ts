import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosiblesComponent } from './posibles.component';

describe('PosiblesComponent', () => {
  let component: PosiblesComponent;
  let fixture: ComponentFixture<PosiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
