import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <div>
  <h2>Employee Detail</h2>
  <ul *ngFor="let employee of employee">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
</div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employee=[];

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => this.employee= data);
  }

}
