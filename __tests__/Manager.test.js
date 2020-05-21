const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// test to see if the manager object can be created
test('Can the class make the Manager object?', () => {
   const mgr = new Manager();
   expect(typeof(mgr)).toBe('object');
});

// test to see if the manager object can return the officeNumber
test('Can the constructor return the officeNumber?', () => {
   const officeNum = '5129646668';
   const mgr = new Manager('Bob', 24601, 'bob@gmail.com', officeNum);
   expect(mgr.officeNum).toBe(officeNum);
});

// test to see if the manager object returns the manager role
test('Can the constructor return the Role?', () => {
   const role = 'Manager';
   const mgr = new Manager('Bob', 24601, 'bob@gmail.com', '5125551212');
   expect(mgr.role).toBe(role);
});