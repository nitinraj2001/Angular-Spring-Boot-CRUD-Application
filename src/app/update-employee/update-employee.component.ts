import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee=new Employee();

  private id : number;

  constructor(private employeeService: EmployeeService, private router : ActivatedRoute,private therouter : Router) { }


  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>this.employee=data);
  }

  postEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }

  goToEmployeeList(){
    this.therouter.navigate(['/employees']);
  }

  onSubmit(){

    this.postEmployee();
    
  }

}
