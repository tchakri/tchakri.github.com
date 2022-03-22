import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TableDataComponent} from './table-data.component';
import {TableDataEditComponent} from './table-data-edit/table-data-edit.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    TableDataComponent,
    TableDataEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    TableDataComponent
  ]
})
export class TableDataModule {
}
