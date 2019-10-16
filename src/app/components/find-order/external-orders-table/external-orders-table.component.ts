import {Component, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import { OrdersService } from '../../../services/orders.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ExternalOrder } from '../../../models/external-order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-external-orders-table',
  templateUrl: './external-orders-table.component.html',
  styleUrls: ['./external-orders-table.component.css']
})
export class ExternalOrdersTableComponent implements OnInit {
  subscription: Subscription;
  externalOrderList: MatTableDataSource<ExternalOrder>;
  displayedColumns: string[] = ['id', 'customer_name', 'product_count', 'order_volume', 'sku'];
  searchValue: string;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  @Output() orderSelected = new EventEmitter<ExternalOrder>();

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.subscription = this.ordersService.externalOrders$
      .subscribe(orders => {
        this.externalOrderList = new MatTableDataSource(orders);
        this.externalOrderList.sort = this.sort;
        this.externalOrderList.paginator = this.paginator;
      });
    this.ordersService.getExternalOrders();
  }

  openExternalOrder = (row: ExternalOrder): void => {
    this.orderSelected.emit(row);
  };

  clearSearchInput = (): void => {
    this.searchValue = '';
  };

  filterOrders = (): void => {
    this.externalOrderList.filter = this.searchValue.trim().toLowerCase();
    if (this.externalOrderList.paginator) {
      this.externalOrderList.paginator.firstPage();
    }
  }

}
