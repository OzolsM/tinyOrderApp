import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOrderDialogComponent } from './import-order-dialog.component';

describe('ImportOrderDialogComponent', () => {
  let component: ImportOrderDialogComponent;
  let fixture: ComponentFixture<ImportOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
