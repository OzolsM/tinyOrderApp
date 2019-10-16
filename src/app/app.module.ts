import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersService } from './services/orders.service';
import { HttpClientModule} from '@angular/common/http';
import { OrdersListComponent } from './components/imported-orders-table/orders-list.component';
import { ImportOrderDialogComponent } from './components/import-order-dialog/import-order-dialog.component';
import { ExternalOrdersTableComponent } from './components/find-order/external-orders-table/external-orders-table.component';
import { FindOrderProductsTableComponent } from './components/find-order/check-products-table/find-order-products-table.component';
import { PrepareProductsComponent } from './components/prepare-products/prepare-products.component';
import { MaterialModule } from './material-modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    ImportOrderDialogComponent,
    ExternalOrdersTableComponent,
    FindOrderProductsTableComponent,
    PrepareProductsComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ImportOrderDialogComponent],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
