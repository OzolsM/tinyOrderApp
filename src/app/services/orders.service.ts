import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExternalOrder } from "../models/external-order";
import { ImportedOrder } from "../models/imported-order";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private importedUrl: string = '/assets/data/importedOrders.json';
  private externalUrl: string = '/assets/data/externalOrders.json';
  private importedOrdersSource = new BehaviorSubject<Array<ImportedOrder>>([]);
  private externalOrdersSource = new BehaviorSubject<Array<ExternalOrder>>([]);

  importedOrders$ = this.importedOrdersSource.asObservable();
  externalOrders$ = this.externalOrdersSource.asObservable();

  constructor(private http: HttpClient) { }

  getImportedOrders = (): void => {
    this.http.get<ImportedOrder[]>(this.importedUrl)
      .subscribe(orders => this.importedOrdersSource.next(orders));
  };

  getExternalOrders = () : void => {
     this.http.get<ExternalOrder[]>(this.externalUrl)
      .subscribe(orders => this.externalOrdersSource.next(orders));
  };

  addNewImportedOrder = (newOrder: ImportedOrder) => {
    this.importedOrdersSource.next([...this.importedOrdersSource.getValue(), newOrder]);
  };

}
