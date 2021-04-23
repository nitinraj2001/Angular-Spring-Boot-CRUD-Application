import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee=new Employee();

  constructor(private employeeService : EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  postEmployee(){
    this.employeeService.saveEmployee(this.employee).subscribe(data=>{
      console.log(JSON.stringify(data));
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){

    this.postEmployee();
    
  }

}
