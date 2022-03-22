import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {HeaderComponent} from './header.component';
import {DetailsComponent} from './details/details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
