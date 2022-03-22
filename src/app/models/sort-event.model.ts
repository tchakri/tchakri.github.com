import {SortColumn, SortDirection} from '../shared/directives/sortable-header.directive';

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
