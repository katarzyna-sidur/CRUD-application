import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee.mmodel';
import { FormComponent } from '../form/form.component';

@Component({
    selector: 'app-edit-employee',
    templateUrl: './edit-employee.component.html',
    styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
    employee: Employee;
      @ViewChild('form')
    form: FormComponent;

    constructor(public router: Router, public employeeService: EmployeesService, private route: ActivatedRoute) { }

    ngOnInit() {
        const employeeId = +this.route.snapshot.paramMap.get('id');

        this.employeeService.getEmployee(employeeId).subscribe((data) => {
            this.employee = data;
        });
    }

    saveEmployee() {
       this.employeeService.editEmployee(this.form.employee).subscribe((data) => {
           this.router.navigate(['list']);
       });
    }

}
