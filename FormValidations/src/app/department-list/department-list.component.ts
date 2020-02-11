import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <h2>
      department-list works!
    </h2>
    <ul class="items">
    <li (click)="onselect(departments)" *ngFor="let departments of departmentmentList">
    <span class="badge">{{departments.id}}</span>{{departments.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departmentmentList = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'nodejs'},
    {id: 3, name: 'mongoDB'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onselect(departments){
    this.router.navigate(['/departments', departments.id])

  }

}
