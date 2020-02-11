import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-department-details',
  template: `
    <h2>
    selected Department is {{departmentId}}
    </h2>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.departmentId= id ;
  }

}
