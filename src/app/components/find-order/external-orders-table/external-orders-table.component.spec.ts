import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalOrdersTableComponent } from './external-orders-table.component';

describe('ExternalOrdersTableComponent', () => {
  let component: ExternalOrdersTableComponent;
  let fixture: ComponentFixture<ExternalOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
