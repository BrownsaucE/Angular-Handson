import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Employee } from '../employee';



@Component({
  selector: 'app-edit-emp-template-driver',
  templateUrl: './edit-emp-template-driver.component.html',
  styleUrls: ['./edit-emp-template-driver.component.css'],
})
export class EditEmpTemplateDriverComponent implements OnInit {

  employee:Employee;
  departments:Department[];
  constructor() {
    this.employee = {
      id: 3,
      name: 'John',
      salary: 10000,
      permanent: true,
      department: {"id":2, "name":"CSS"},
      skill: [{"id":1, "name":"HTML"},{"id":2, "name":"CSS"},{"id":3, "name":"JavaScript"}],
      dateOfBirth: new Date('12/21/200')
    }
    this.departments = [
      { id: 1, name: "Payroll"},
      { id: 2, name: "Internal"},
      { id: 3, name: "HR"}
    ]
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.employee);
  }

}