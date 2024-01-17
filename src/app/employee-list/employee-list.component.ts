import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../service/adminapi.service';
import { employeeModel } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private api:AdminapiService   ){}
  

  allEmployee:employeeModel[]=[]
  searchKey:string=""

  ngOnInit(): void {
    this.allemployee()
  }
  allemployee(){
    this.api.getAllemployeeapi().subscribe({
      next:(res:any)=>{
        this.allEmployee=res
        console.log(this.allEmployee)

      },
      error:(err:any)=>{
        console.log(err)
      }
    })

  }

  removeemployee(id:any){
      this.api.deleteemployee(id).subscribe({
        next:(res:any)=>{
          console.log(res)
          this.allemployee()
         
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
  }

  sortid(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }
  sortname(){
    this.allEmployee.sort((a:any,b:any)=>a.name.localeCompare(b.name))
  }

}
