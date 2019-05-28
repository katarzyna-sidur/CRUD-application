import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employee/list-employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { FormComponent } from './components/form/form.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeListResolverService } from './services/employee-list-resolver.service';
import { ViewEmployeeResolverService } from './resolvers/view-employee-resolver.service';


const appRoutes: Routes = [
    {
        path: 'list', component: ListEmployeesComponent, resolve: {
            xxx: EmployeeListResolverService
        }
    },
    { path: 'create', component: CreateEmployeeComponent },
    {
        path: 'show/:id', component: ShowEmployeeComponent, resolve: {
            aaa: ViewEmployeeResolverService
        }
    },
    { path: 'edit/:id', component: EditEmployeeComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        ListEmployeesComponent,
        CreateEmployeeComponent,
        DisplayEmployeeComponent,
        ShowEmployeeComponent,
        FormComponent,
        EditEmployeeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [EmployeeListResolverService, ViewEmployeeResolverService],
    bootstrap: [AppComponent]
})
export class AppModule { }
