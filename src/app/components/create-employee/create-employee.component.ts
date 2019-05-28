import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.mmodel';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormComponent } from '../form/form.component';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

    employeesList: Array<Employee> = [];

    @ViewChild('form')
    form: FormComponent;

    constructor(public employeeService: EmployeesService, public router: Router, private route: ActivatedRoute) { }



    saveEmployee(): void {
        this.employeeService.saveEmployee(this.form.employee).subscribe((data: Employee) => {

            console.log(data);
            this.router.navigate(['list']);
        });

    }

}
