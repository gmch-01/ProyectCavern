import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvInsComponent } from './inv-ins.component';

describe('InvInsComponent', () => {
  let component: InvInsComponent;
  let fixture: ComponentFixture<InvInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
