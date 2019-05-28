import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.mmodel';
import { EmployeesService } from '../services/employees.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewEmployeeResolverService implements Resolve<Employee>  {

employee: Employee;
  constructor(private employeesServices: EmployeesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Employee | Observable<Employee> | Promise<Employee> {
        return this.employeesServices.getEmployee(route.params.id);
    }
}
