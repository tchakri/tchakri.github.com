import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataModel, FormDataModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class SharedService<T> {
  private formDataSource = new BehaviorSubject<T>({} as T);
  private formDataSource$ = this.formDataSource.asObservable();
  // private dataModelSource = new BehaviorSubject<DataModel>(new DataModel());
  // private dataModelSource$ = this.dataModelSource.asObservable();

  getData(): Observable<T> {
    return this.formDataSource$;
  }

  setData(value: T) {
    this.formDataSource.next(value);
  }
}
