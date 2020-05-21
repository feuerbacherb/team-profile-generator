const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// test to see if the Intern object can be made
test('Can we create an Intern object?', () => {
   const intern = new Intern();
   expect(typeof(intern)).toBe(object);
});