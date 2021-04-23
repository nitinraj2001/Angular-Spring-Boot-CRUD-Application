import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  id : number;

  constructor(private employeeService : EmployeeService, private router: Router , private theRouter : ActivatedRoute) {}

  ngOnInit(): void {
     
    this.id=this.theRouter.snapshot.params['id'];

    this.employeeService.deleteEmployee(this.id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/employees']);
    },
    error=>console.log(error));
  }

}
