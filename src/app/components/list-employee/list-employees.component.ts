import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.mmodel';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

    employees: Employee[];
    search = '';

    constructor(public employeeService: EmployeesService, private route: ActivatedRoute) { }

    ngOnInit() {
        // this.employeeService.getEmployees().subscribe((result) => {
        //     this.employees = result;
        // });
        this.employees = this.route.snapshot.data['xxx'];
    }

    getSearchName(a: string) {
        return this.employees.filter(function (employee: Employee) {
            return employee.name.toLowerCase().includes(a.toLowerCase());
        });
    }


}
