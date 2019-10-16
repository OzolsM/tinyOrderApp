import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOrderProductsTableComponent } from './find-order-products-table.component';

describe('FindOrderProductsTableComponent', () => {
  let component: FindOrderProductsTableComponent;
  let fixture: ComponentFixture<FindOrderProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOrderProductsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOrderProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
