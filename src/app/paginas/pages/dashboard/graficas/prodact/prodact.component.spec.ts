import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdactComponent } from './prodact.component';

describe('ProdactComponent', () => {
  let component: ProdactComponent;
  let fixture: ComponentFixture<ProdactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
