import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.mmodel';
import { EmployeesService } from './employees.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<Employee[]>  {

    constructor(private employeesServices: EmployeesService ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employee[] | Observable<Employee[]> | Promise<Employee[]> {
        return this.employeesServices.getEmployees();
    }



}

