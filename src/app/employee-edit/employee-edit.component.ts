import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employee.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminapiService } from '../service/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee:employeeModel={}
  sampleemployee:any=''
  
  constructor(private route:ActivatedRoute ,private api:AdminapiService,private rout:Router){}
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      // console.log(res.id)
      const {id}=res
      this.viewemployee(id)

    })

   
    
  }


  viewemployee(id:any){
    this.api.viewemployee(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.employee=res
        this.sampleemployee=res.id

      },
      error:(err:any)=>{
        console.log(err)

      }
    })

  }

  editemployee(id:any){
    this.api.updateEmployee(id,this.employee).subscribe({
      next:(res:any)=>{
        Swal.fire({
          icon: "success",
          title: "Update successfull",
          
        });
        this.rout.navigateByUrl('/employees')
        
        
        
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  cancelbutton(){
   this.viewemployee(this.sampleemployee)
  }



 

}
