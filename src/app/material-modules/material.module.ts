import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule, MatDialogModule, MatIconModule, MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';

const materialComponents = [
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
