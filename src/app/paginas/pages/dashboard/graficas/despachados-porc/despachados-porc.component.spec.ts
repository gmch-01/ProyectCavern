import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachadosPorcComponent } from './despachados-porc.component';

describe('DespachadosPorcComponent', () => {
  let component: DespachadosPorcComponent;
  let fixture: ComponentFixture<DespachadosPorcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespachadosPorcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachadosPorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
