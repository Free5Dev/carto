import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintControlComponent } from './print-control.component';

describe('PrintControlComponent', () => {
  let component: PrintControlComponent;
  let fixture: ComponentFixture<PrintControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
