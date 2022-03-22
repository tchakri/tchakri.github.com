import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {FileService} from 'src/app/services/file.service';
import {SortableHeaderDirective} from '../../shared/directives/sortable-header.directive'
import {DataModel, SortEvent} from '../../models';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  viewProviders: [SortableHeaderDirective]
})
export class TableDataComponent implements OnInit {

  fileFound = false;
  isLoading = true;
  data: DataModel[] = [];
  clickType: string = '';
  selectedData: DataModel[] = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private fileService: FileService,
    private sharedService: SharedService<DataModel>) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fileService.readFile().subscribe((data: any) => {
        let records = (data).split(/\r\n|\n/);
        records.forEach((x: any) => {
          const rec = x.split(',');
          let data = new DataModel();
          data.column_0 = rec[0].trim();
          data.column_1 = rec[1].trim();
          data.column_2 = rec[2].trim();
          data.column_3 = rec[3].trim();
          data.column_4 = rec[4].trim();
          this.data.push(data);
        });
      },
      (error: any) => {
        if (error.status === 404) {
          this.fileFound = false;
          this.isLoading = false;
        }
      },
      () => {
        this.fileFound = true;
        this.isLoading = false;
      });
  }

  onSort({column, direction}: SortEvent) {
    this.data = this.sortData(this.data, {column, direction});
  }

  onSingleClick(data: DataModel, event: any) {
    const toggle = this.toggleClass(event, 'selected');
    if (toggle) {
      this.selectedData = this.selectedData.filter((item: DataModel) => item !== data);
    } else {
      this.selectedData.push(data);
    }
    this.selectedData = this.sortData(this.selectedData, {column: 'column_0', direction: 'asc'});
  }

  onDoubleClick(data: DataModel, event: any) {
    const hasClass = this.hasClass(event, 'selected');
    if (hasClass) {
      this.exportData();
    } else {
      this.sharedService.setData(data);
      this.router.navigate(['/table-data-edit']);
    }
  }

  private hasClass(event: any, className: string): boolean {
    return event.target.parentElement.classList.contains(className);
  }

  private toggleClass(event: any, className: string): boolean {
    const hasClass = this.hasClass(event, className);
    if (hasClass) {
      this.renderer.removeClass(event.target.parentElement, className);
    } else {
      this.renderer.addClass(event.target.parentElement, className);
    }
    return hasClass;
  }

  private sortData(data: DataModel[], {column, direction}: SortEvent) {
    return data.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }

  private exportData() {
    this.fileService.exportData(this.selectedData);
  }
}
