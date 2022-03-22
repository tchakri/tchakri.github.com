import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SampleComponent} from './components/sample/sample.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderModule} from './components/header/header.module';
import {TableDataModule} from './components/table-data/table-data.module';
import {FileSaverModule} from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    TableDataModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
