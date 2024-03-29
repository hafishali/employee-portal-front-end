import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminapiService } from '../service/adminapi.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=''
  password:string=''

  constructor(private api:AdminapiService ,private router:Router){}

  login(){
    if(!this.email || !this.password ){
      // alert('please fill the form completely')

      
      Swal.fire({
        icon: "info",
        title: "Incomplete Form ",
        text: "Please fill the from",
        
      });

     
    }
    else{
      

      this.api.authorization().subscribe({
        next:(res:any)=>{
          const {email,password}=res
          if(email==this.email && password==this.password){
            Swal.fire({
              icon: "success",
              title: "login successfull ",
      
            });
            // navigate
            this.router.navigateByUrl('dashboard')
            

            

          }
          else{

            Swal.fire({
              icon: "error",
              title: "Oops ",
              text: "Invalid email or password",
              
            });
      

          }
        },
        error:(res:any)=>{
          console.log(res);
          

        }
      })

    }
  
  }

}


