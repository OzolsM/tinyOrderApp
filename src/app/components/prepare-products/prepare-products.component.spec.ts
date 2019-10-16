import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareProductsComponent } from './prepare-products.component';

describe('PrepareProductsComponent', () => {
  let component: PrepareProductsComponent;
  let fixture: ComponentFixture<PrepareProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
