import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FindOrderProductsTableComponent } from '../find-order/check-products-table/find-order-products-table.component';
import { MatStepper } from '@angular/material';
import { ExternalOrder } from '../../models/external-order';
import { Product } from '../../models/product';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-import-order-dialog',
  templateUrl: './import-order-dialog.component.html',
  styleUrls: ['./import-order-dialog.component.css']
})
export class ImportOrderDialogComponent implements OnInit {
  preparedStepCompleted = false;
  findStepCompleted = true;
  isEditable = true;
  selectedOrder: ExternalOrder;
  selectedProducts: Array<Product> = [];
  totalPrice: any = 0;
  setAutoHide = true;
  autoHide = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @Output() orderConfirmed = new EventEmitter<object>();
  @ViewChild(FindOrderProductsTableComponent, {static: false})

  private findProductsComponent: FindOrderProductsTableComponent;

  constructor(
    private ordersService: OrdersService,
    private dialogRef: MatDialogRef<ImportOrderDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: []) {
    this.selectedProducts = [];
  }

  ngOnInit() {}

  backToFindOrder = (stepper: MatStepper): void => {
    this.selectedProducts = [];
    this.findStepCompleted = false;
    stepper.selected.completed = false;
    stepper.previous();
  };

  toProductsPrepare = (stepper: MatStepper): void => {
    if (this.findProductsComponent.selection.selected && this.findProductsComponent.selection.selected.length > 0){
      this.selectedProducts = this.findProductsComponent.selection.selected;
      stepper.next();
    } else {
      this.openSnackBar('Select at least one product!');
    }
  };

  toConfirm = (stepper: MatStepper): void => {
    if (this.preparedStepCompleted){
      this.getTotalPrice();
      stepper.selected.completed = true;
      stepper.next();
    } else {
      this.openSnackBar('Select all product types!');
    }
  };

  closeModal = (): void => {
    this.dialogRef.close();
  };

  openOrder = (order: ExternalOrder): void => {
    this.selectedOrder = order;
  };

  setSelectedProducts = (products: Product): void => {
    this.findStepCompleted = true;
  };

  checkPrepareProductsStepStatus = (productsWithTypes: Array<Product>): void => {
    productsWithTypes.filter(product => product.type === '').length > 0 ?
      this.preparedStepCompleted = false :
      this.preparedStepCompleted = true;
  };

  backToPrepareProducts = (stepper: MatStepper): void => {
    this.totalPrice = 0;
    stepper.selected.completed = false;
    stepper.previous();
  };

  getTotalPrice = (): void => {
    this.selectedProducts.map(product => this.totalPrice += (parseInt(product.count) * parseFloat(product.price)));
  };

  confirmOrder = (): void => {
    const date = new Date();
    let newOrder = {
      id: Math.floor(Math.random() * 100),
      customer: this.selectedOrder.customer_name,
      revenue: '5.00',
      created_at: [date.getDate(), date.getMonth()+1, date.getFullYear()].join('-'),
      cost: (this.totalPrice - 5).toFixed(2),
      price: this.totalPrice.toFixed(2),
      fulfillment: "In Production"
    };

    this.openSnackBar('Order successfully imported!');
    this.ordersService.addNewImportedOrder(newOrder);
    this.dialogRef.close();
  };

  openSnackBar = (message: string): void => {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackBar.open(message, null, config);
  }
}
