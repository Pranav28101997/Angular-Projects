import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from '../app/employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getEmployee() {
  return this.http.get(this._url);
  }
}
