const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// test to see if the Intern object can be made
test('Can we create an Intern object?', () => {
   const intern = new Intern();
   expect(typeof(intern)).toBe('object');
});

// test the inherited properties
// test the Intern's name
test("Can the object return the Intern's name?", () => {
   const name = 'Pontmercy, Marius';
   const intern = new Intern(name, 24603, 'pontmercym@gmail.com');
   expect(intern.name).toBe(name);
});

// test the Intern's id
test("Can the object return the Intern's ID?", () => {
   const id = 24603;
   const intern = new Intern("Pontmercy, Marius", id, 'pontmercym@gmail.com')
   expect(intern.id).toBe(id);
});

// test the Intern's email
test("Can the object return the Intern's email?", () => {
   const email = 'pontmercym@gmail.com';
   const intern = new Intern('Pontmercy, Marius', 24603, email);
   expect(intern.email).toBe(email);
});

// End of the inherited tests

// test to see if the object returns the intern's school
test("Can the object return the Intern's school property?", () => {
   const school = 'University of Alabama';
   const intern = new Intern('Pontmercy, Marius', 24603, 'pontmercym@gmail.com', school);
   expect(intern.school).toBe(school);
});

// test to see if the object returns the correct role
test("Can the object return the Intern's role of Intern?", () => {
   const role = 'Intern';
   const intern = new Intern('Pontmercy, Marius', 24603, 'pontmercym@gmail.com', 'University of Alabama');
   expect(intern.getRole()).toBe(role);
});