import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
     this.employeeService.getEmployee().
     subscribe(data => this.employee = data);

  }

}
