import { Component } from '@angular/core';
import { Employee } from './employee';

let date:Date = new Date('12/21/200')
let myEmp:Employee = {
  id: 3,
  name: 'John',
  salary: 10000,
  permanent: true,
  department: {"id":1, "name":"Payroll"},
  skill: [{"id":1, "name":"HTML"},{"id":2, "name":"CSS"},{"id":3, "name":"JavaScript"}],
  dateOfBirth: date
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  favouriteMovie = 'Lord of the Rings';
  employee=myEmp;
}
