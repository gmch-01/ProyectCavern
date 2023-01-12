import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInvComponent } from './tabla-inv.component';

describe('TablaInvComponent', () => {
  let component: TablaInvComponent;
  let fixture: ComponentFixture<TablaInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaInvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
