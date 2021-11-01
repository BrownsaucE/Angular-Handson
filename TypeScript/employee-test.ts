import { Employee } from "./employee.js";

let myEmp:Employee = {
    id: 3,
    name: 'John',
    salary: 10000,
    permanent: true,
    department: {"id":1, "name":"Payroll"},
    skill: [{"id":1, "name":"HTML"},{"id":2, "name":"CSS"},{"id":3, "name":"JavaScript"}]
}
console.log(myEmp);

class EmployeeTest{
    //field
    employee: Employee;

    //constructor
    constructor(employee:Employee){
        this.employee = employee;
    }

    //function
    display():void{
        console.log(this.employee);
    }
}

//create an object
var test = new EmployeeTest(myEmp);

//access the function
test.display()

