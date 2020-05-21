const Employee = require('./Employee');

function Engineer(name, id, email, github) {
   this.base = Employee;
   this.base(name, id, email);
   this.github = github;
   this.role = 'Engineer';
}

Engineer.prototype = new Employee;

Engineer.prototype.getGitHub = function() {
   return this.github;
};

module.exports = Engineer;


