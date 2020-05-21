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
   const mgr = new Manager('Valjean, Jean', 24601, 'valjeanj@gmail.com', officeNum);
   expect(mgr.officeNum).toBe(officeNum);
});

// test to see if the manager object returns the manager role
test('Can the constructor return the Role?', () => {
   const role = 'Manager';
   const mgr = new Manager('Valjean, Jean', 24601, 'valjeanj@gmail.com', '5125551212');
   expect(mgr.role).toBe(role);
});

// these tests may be redundant, but I will do them anyway

// test to see if we can return the email of the Manager
test("Can the Manager's email be returned?", () => {
   const email = 'valjeanj@gmail.com';
   const mgr = new Manager('Valjean, Jean', 24601, email, '5125551212');
   expect(mgr.email).toBe(email);
});

// test to see if the manager object can return the name
test("Can the Manager's name be returned?", () => {
   const name = 'Valjean, Jean';
   const mgr = new Manager(name, 24601, 'valjeanj@gmail.com', '5125551212');
   expect(mgr.name).toBe(name);
});

// test to see if the manager object can return the id
test("Can the Manager's id be returned?", () => {
   const id = 24601;
   const mgr = new Manager('Valjean, Jean', id, 'valjeanj@gmail.com', '5125551212');
   expect(mgr.id).toBe(id);
})