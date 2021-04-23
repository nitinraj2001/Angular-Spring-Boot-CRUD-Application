import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:9090/api/employees";

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  saveEmployee(employee: Employee):Observable<Object>{
    return this.http.post(`${this.baseURL}`,employee);

  }

  getEmployeeById(id : number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(employee : Employee): Observable<Object> {
    return this.http.put(`${this.baseURL}`,employee);
  }

  deleteEmployee(id : number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
