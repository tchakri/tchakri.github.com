import {Component, OnInit} from '@angular/core';
import {FormDataModel} from '../../../models';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  data = new FormDataModel();

  constructor(private sharedService: SharedService<FormDataModel>) {
    this.sharedService.getData().subscribe((value) => this.data = value);
  }

  ngOnInit(): void {
  }
}
