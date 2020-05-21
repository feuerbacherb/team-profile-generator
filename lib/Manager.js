const Employee = require('./Employee');

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

function Manager(name, id, email, officeNum) {
   this.base = Employee;
   this.base(name, id, email);
   this.officeNum = officeNum;
   this.role = 'Manager';
}

Manager.prototype = new Employee;

module.exports = Manager;
