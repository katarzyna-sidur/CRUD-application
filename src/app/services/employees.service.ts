import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.mmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    baseUrl = 'http://localhost:3000/employees';

    constructor(private httpClient: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(this.baseUrl + '/' + id.toString());
    }

    saveEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>('http://localhost:3000/employees', employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    deleteEmployee(id: number): Observable<Employee> {
       return this.httpClient.delete<Employee>(`${this.baseUrl}/${id}`);
    }

    editEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}

