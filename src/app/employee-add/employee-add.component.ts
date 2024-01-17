import { Component } from '@angular/core';
import { employeeModel } from '../employee.model';
import { AdminapiService } from '../service/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  employee:employeeModel={}

  constructor(private api:AdminapiService){}
  cancelemployee(){
    this.employee={}
  }
  addemployee(){
    console.log(this.employee)

    if(!this.employee.name || !this.employee.id || !this.employee.email || !this.employee.status ){
      Swal.fire({
        icon: "warning",
        title: "Incomplete form",
        text: "Please fill the form completly",
        
      });

    }
    else{
      this.api.addEmployeeApi(this.employee).subscribe({
        next:(res:employeeModel)=>{
          console.log(res);
          Swal.fire({
            icon: "success",
            title: "Uploaded succesfully",
            text: `${res.name} added succesfully`,
            
          });
          this.employee={}
        },
        error:(err:any)=>{
          console.log(err)
           Swal.fire({
            icon: "error",
            title: "Oops",
            text: "Something went wrong",
            
          });
        }
      })

    }

    
  }
}
