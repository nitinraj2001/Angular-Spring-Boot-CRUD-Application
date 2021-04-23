import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  employee : Employee=new Employee();

  constructor(private router : Router, private employeeService : EmployeeService, private therouter : ActivatedRoute ) {}

  BackToViewPage(){
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {

    this.id=this.therouter.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data=>this.employee=data);
  }

}
