// ---------- JavaScript Object - Define JavaScript object for employee ----------
var Employee = {
    Salary: 5000,
    firstName: "John",
    lastName: "Stoke",
    permanentStaff: true
}
console.log(Employee);

// ---------- JSON - Define JSON for employee details and parse ----------
var text = '{"firstName":"John", "lastName":"Stoke", "Salary":5000, "permanentStaff":true}';
var employee = JSON.parse(text);
for(var property in employee){
    console.log(property + ": " + employee[property])
}

// ---------- JSON - Add department details to employee ----------
text = '{"department id":3, "department name":"payroll"}';
employee.department = JSON.parse(text);
for(var property in employee.department){
    console.log(property + ": " + employee.department[property])
}

// ---------- JSON - Add Skill details to employee ----------
text = '[{"id":1,"value":"HTML"},{"id":2,"value":"CSS"},{"id":3,"value":"JavaScript"}]';
employee.skill = JSON.parse(text);
for(let i = 0; i < employee.skill.length; i ++){
    console.log("Skill " + (i+1) + ": id = " + employee.skill[i].id + ": value = " + employee.skill[i].value)
}
