class Employee {
   
   constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
   }

   // return the Employee's name
   getName() {
      return this.name;
   }

   // return the Employee's id
   getId() {
      return this.id;
   }

   // return the Employee's email
   getEmail() {
      return this.email;
   }

   // return the Employee's role
   getRole() {
      return this.role;
   }
}

module.exports = Employee;