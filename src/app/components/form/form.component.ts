import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Photo } from 'src/app/models/photos.model';
import { Employee } from 'src/app/models/employee.mmodel';
import { Department } from 'src/app/models/department.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
    @ViewChild('employeeForm')
    employeeForm: NgForm;
     previewPhoto = false;


    departments: Department[] = [
        { id: 1, name: 'Help Desk' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'IT' },
        { id: 4, name: 'Payroll' }
    ];

    @Input()
    employee: Employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: null,
        isActive: false,
        photoPath: null
    };

    photoList: Photo[] = [
        { id: 1, url: 'assets/images/mark.png', name: 'Avatar 1' },
        { id: 2, url: 'assets/images/mary.png', name: 'Avatar 2' },
        { id: 3, url: 'assets/images/john.png', name: 'Avatar 3' },
        { id: 4, url: 'assets/images/women.png', name: 'Avatar 4' },
        { id: 5, url: 'assets/images/man.png', name: 'Avatar 5' },
    ];

    constructor() { }

      togglePhotoPreview() {
        this.previewPhoto = !this.previewPhoto;
    }

    ngOnInit() {
    }

}
