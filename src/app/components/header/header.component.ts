import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDataModel} from '../../models';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formData: FormDataModel = new FormDataModel();

  constructor(private router: Router, private sharedService: SharedService<FormDataModel>) {
  }

  ngOnInit(): void {
  }

  redirectTo() {
    this.router.navigate(['/sample'])
  }

  processData() {
    this.sharedService.setData(this.formData);
    this.router.navigate(['/form-data']);
  }
}
