import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.mmodel';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
    selector: 'app-show-employee',
    templateUrl: './show-employee.component.html',
    styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
    employee: Employee;

    constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

    ngOnInit() {
        //  const employeeId = +this.route.snapshot.paramMap.get('id');
        // this.employeesService.getEmployee(employeeId).subscribe((data) => {
        //  this.employee = data;
        // });
        this.employee = this.route.snapshot.data['aaa'];
    }

    backToList() {
        this.router.navigate(['list']);
    }


}
