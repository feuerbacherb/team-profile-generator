const Employee = require('../lib/Employee');

// test if employee object can be made
test('Can the employee object be made?', () => {
   const emp = new Employee();
   expect(typeof(emp)).toBe("object");
});

// test to see if the constructor can take name argument
test('Can the constructor take name argument?', () => {
   const name = 'Bob';
   const emp = new Employee(name);
   expect(emp.name).toBe(name);
});

// test to see if the constructor can take the id argument
test('Can the constructor accept the id argument', () => {
   const id = 24601;
   const emp = new Employee('Bob', id);
   expect(emp.id).toBe(id);
});

// test to see if the constructor can take the email argument
test('Can the constructor accept the email argument?', () => {
   const email = 'bob@gmail.com';
   const emp = new Employee('Bob', 24601, email);
   expect(emp.email).toBe(email);
});

// test to see if the constructor can return the employee's name
test("Can the constructor return the employee's name?", () => {
   const name = 'Bob';
   const emp = new Employee(name);
   expect(emp.getName()).toBe(name);
});

// test to see if the constructor can return the employee's id
test("Can the constructor return the employee's id?", () => {
   const id = 24601;
   const emp = new Employee('Bob', id);
   expect(emp.getId()).toBe(id);
})

// test to see if the constructor can return the employee's email
test("Can the constructor return the employee's email?", () => {
   const email = 'bob@gmail.com';
   const emp = new Employee('Bob', 24601, email);
   expect(emp.getEmail()).toBe(email);
});