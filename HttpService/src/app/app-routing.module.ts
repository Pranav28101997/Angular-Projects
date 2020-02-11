import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeDetailsComponent} from '../app/employee-details/employee-details.component'
import {EmployeeListComponent} from '../app/employee-list/employee-list.component'

const routes: Routes = [
  {path: 'employee', component: EmployeeDetailsComponent},
  {path: 'employee-list', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeDetailsComponent,EmployeeListComponent];
