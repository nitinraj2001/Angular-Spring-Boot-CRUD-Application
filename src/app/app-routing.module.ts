import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';


const routes: Routes = [
  {path:'employees' , component:EmployeeListComponent},
  {path:'', redirectTo:'employees' , pathMatch: 'full'},
  {path:'create-employee' , component:CreateEmployeeComponent},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'delete-employee/:id', component:DeleteEmployeeComponent},
  {path:'detail-employee/:id', component:EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
