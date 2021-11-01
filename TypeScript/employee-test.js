"use strict";
exports.__esModule = true;
var myEmp = {
    id: 3,
    name: 'John',
    salary: 10000,
    permanent: true,
    department: { "id": 1, "name": "Payroll" },
    skill: [{ "id": 1, "name": "HTML" }, { "id": 2, "name": "CSS" }, { "id": 3, "name": "JavaScript" }]
};
console.log(myEmp);
var EmployeeTest = /** @class */ (function () {
    //constructor
    function EmployeeTest(employee) {
        this.employee = employee;
    }
    //function
    EmployeeTest.prototype.display = function () {
        console.log(this.employee);
    };
    return EmployeeTest;
}());
//create an object
var test = new EmployeeTest(myEmp);
//access the function
test.display();
