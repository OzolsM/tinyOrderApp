import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-find-order-products-table',
  templateUrl: './find-order-products-table.component.html',
  styleUrls: ['./find-order-products-table.component.css']
})
export class FindOrderProductsTableComponent implements OnInit {

  productsList: MatTableDataSource<Product>;
  displayedColumns: string[] = ['name', 'sku', 'checkbox'];
  selection = new SelectionModel<Product>(true, []);

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @Input() products: Array<Product>;
  @Output() productsSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.productsList = new MatTableDataSource(this.products);
  }

  ngAfterViewInit() {
    this.productsList.sort = this.sort;
    this.productsList.paginator = this.paginator;
  }

  isAllSelected = () => {
    const numSelected = this.selection.selected.length;
    const numRows = this.productsList.data.length;
    return numSelected === numRows;
  };

  masterToggle = () => {
    this.isAllSelected() ?
      this.selection.clear() :
      this.productsList.data.forEach(row => {
        this.selection.select(row);
      });
    this.productsSelected.emit(this.selection.selected);
  };

  checkboxLabel = (row?): string => {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  };

  markProduct = (row: Product): void => {
    this.selection.toggle(row);
    this.productsSelected.emit(this.selection.selected);
  }

}
