import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselayerListComponent } from './baselayer-list.component';

describe('BaselayerListComponent', () => {
  let component: BaselayerListComponent;
  let fixture: ComponentFixture<BaselayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselayerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
