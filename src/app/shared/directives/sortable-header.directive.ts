import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {DataModel, SortEvent} from '../../models';

export type SortColumn = keyof DataModel;
export type SortDirection = 'asc' | 'desc';
const rotate: { [key: string]: SortDirection } = {'asc': 'desc', 'desc': 'asc'};

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableHeaderDirective {

  @Input() sortColumn: SortColumn = 'column_0';
  @Input() direction: SortDirection = 'asc';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortColumn, direction: this.direction});
  }

}
