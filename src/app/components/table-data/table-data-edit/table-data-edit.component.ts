import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {DataModel} from '../../../models';

@Component({
  selector: 'app-table-data-edit',
  templateUrl: './table-data-edit.component.html',
  styleUrls: ['./table-data-edit.component.scss']
})
export class TableDataEditComponent implements OnInit {

  dataModel: DataModel = new DataModel();

  constructor(private sharedService: SharedService<DataModel>) {
  }

  ngOnInit(): void {
    this.sharedService.getData().subscribe((value) => this.dataModel = value);
  }

}
