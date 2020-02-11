import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/department', pathMatch: 'full'},
  {path: 'department', component: DepartmentListComponent },
  {path: 'employee', component: EmployeeListComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent},
  {path: '**', component: PageNoFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent, EmployeeListComponent,DepartmentDetailsComponent];
