import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.mmodel';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
    selector: 'app-display-employee',
    templateUrl: './display-employee.component.html',
    styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent {

    @Input() employee: Employee;
    panelExpanded = true;
    confirmDelete = false;
    @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();


    constructor(private router: Router, private employeeService: EmployeesService) { }



    viewEmployee() {
        this.router.navigate(['/show', this.employee.id], {
        });
    }

    editEmployee() {
        this.router.navigate(['/edit', this.employee.id]);
    }

    deleteEmployee() {
        this.employeeService.deleteEmployee(this.employee.id).subscribe((data) => {
            window.location.reload();
        });
    }
}


