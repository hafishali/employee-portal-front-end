import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  baseurl='http://localhost:3010'

  authorization(){
    return this.http.get(`${this.baseurl}/employee/1`)
  }

  addEmployeeApi(employee:employeeModel){
    return this.http.post(`${this.baseurl}/employee`,employee)
  }

  getAllemployeeapi(){
    return this.http.get(`${this.baseurl}/employee`)
  
  }

  deleteemployee(id:string){
    return this.http.delete(`${this.baseurl}/employee/${id}`)
  }

  viewemployee(id:string){
    return this.http.get(`${this.baseurl}/employee/${id}`)
  }

  updateEmployee(id:any,employee:any){
    return this.http.put(`${this.baseurl}/employee/${id}`,employee)
  }
}
