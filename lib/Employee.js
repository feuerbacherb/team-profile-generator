function Employee(name, id, email) {
   this.name = name;
   this.id = id;
   this.email = email;
   this.role = 'Employee';
}

// return the Employee's name
Employee.prototype.getName = function() {
   return this.name;
};

// return the Employee's id
Employee.prototype.getId = function() {
   return this.id;
}

// return the Employee's email
Employee.prototype.getEmail = function() {
   return this.email;
};

// return the Employee's role
Employee.prototype.getRole = function() {
   return this.role;
};

module.exports = Employee;