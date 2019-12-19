import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtaComponent } from './hta.component';

describe('HtaComponent', () => {
  let component: HtaComponent;
  let fixture: ComponentFixture<HtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
