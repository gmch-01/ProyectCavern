import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioprodComponent } from './formularioprod.component';

describe('FormularioprodComponent', () => {
  let component: FormularioprodComponent;
  let fixture: ComponentFixture<FormularioprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
