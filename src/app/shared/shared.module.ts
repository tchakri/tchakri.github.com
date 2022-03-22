import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SortableHeaderDirective} from './directives/sortable-header.directive';
import {HighlightDirective} from './directives/highlight.directive';


@NgModule({
  declarations: [
    PagenotfoundComponent,
    SortableHeaderDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagenotfoundComponent,
    SortableHeaderDirective,
    HighlightDirective
  ]
})
export class SharedModule {
}
