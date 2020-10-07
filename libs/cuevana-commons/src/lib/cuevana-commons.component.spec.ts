import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuevanaCommonsComponent } from './cuevana-commons.component';

describe('CuevanaCommonsComponent', () => {
  let component: CuevanaCommonsComponent;
  let fixture: ComponentFixture<CuevanaCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuevanaCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuevanaCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
