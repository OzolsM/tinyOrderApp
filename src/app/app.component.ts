import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportOrderDialogComponent } from './components/import-order-dialog/import-order-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog = (): void => {
    const dialogRef = this.dialog.open(ImportOrderDialogComponent, {
      width: '800px',
      minHeight: '500px',
      disableClose: true,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
