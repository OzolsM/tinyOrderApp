import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';

describe('OrderTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });
});
