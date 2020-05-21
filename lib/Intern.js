const Employee = require('./Employee');

function Intern (name, id, email, school) {
   this.base = Employee;
   this.base(name, id, email);
   this.school = school;
   this.role = 'Intern';
}

Intern.prototype = new Employee;


module.exports = Intern;