import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ImportedOrder } from '../../models/imported-order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  subscription: Subscription;
  orderList: MatTableDataSource<ImportedOrder>;
  displayedColumns: string[] = ['id', 'customer', 'created_at', 'revenue', 'cost', 'price', 'fulfillment'];

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.subscription = this.ordersService.importedOrders$
      .subscribe(orders => {
        this.orderList = new MatTableDataSource<ImportedOrder>(orders);
        this.orderList.sort = this.sort;
        this.orderList.paginator = this.paginator;
      });
    this.ordersService.getImportedOrders();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
