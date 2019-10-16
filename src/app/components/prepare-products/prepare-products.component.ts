import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Product } from '../../models/product';

@Component({
  selector: 'app-prepare-products',
  templateUrl: './prepare-products.component.html',
  styleUrls: ['./prepare-products.component.css']
})

export class PrepareProductsComponent implements OnInit {

  productData: MatTableDataSource<Product>;
  displayedColumns: string[] = ['name', 'sku', 'type'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @Input() selectedProducts: Array<Product>;
  @Output() typesSelected = new EventEmitter<Array<Product>>();

  constructor() { }

  ngOnInit() {
    this.selectedProducts.map(product => product.type = '');
    this.productData = new MatTableDataSource(this.selectedProducts);
  }

  ngAfterViewInit() {
    this.productData.sort = this.sort;
    this.productData.paginator = this.paginator;
  }
  typeSelected = (): void => {
    this.typesSelected.emit(this.productData.data);
  }

}
