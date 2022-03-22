import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FileSaverService} from 'ngx-filesaver';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient, private fileSaverService: FileSaverService) {
  }

  readFile() {
    return this.http.get(environment.inputFile, {responseType: 'text'});
  }

  exportData(data: any[]) {
    let str = '';
    data.forEach((x, i) => {
      str = (str + Object.values(x).join(',') + (i === (data.length-1) ? '' : '\n'));
    })
    const fileName = `${environment.exportFileName}`;
    const fileType = this.fileSaverService.genType(fileName);
    const txtBlob = new Blob([str], { type: fileType });
    this.fileSaverService.save(txtBlob, fileName);
  }
}
