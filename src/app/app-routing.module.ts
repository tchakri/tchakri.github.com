import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {SampleComponent} from './components/sample/sample.component';
import {DetailsComponent} from './components/header/details/details.component';
import {TableDataEditComponent} from './components/table-data/table-data-edit/table-data-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'form-data', component: DetailsComponent},
  {path: 'table-data-edit', component: TableDataEditComponent},
  {path: 'sample', component: SampleComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
