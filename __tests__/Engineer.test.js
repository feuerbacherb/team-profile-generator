const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// test to see if the Engineer object can be created
test('Can the Engineer object be created?', () => {
   const eng = new Engineer();
});

// these tests might be redundant, but do them anyway
// test to see if the name of the engineer returns
test("Can the Engineer's name be returned?", () => {
   const name = 'Valjean, Colette';
   const eng = new Engineer(name, 24602, 'valjeanc@gmail.com', 'valjeanc');
   expect(eng.name).toBe(name);
});

// test to see if the id of the engineer returns
test("Can the Engineer's ID be returned?", () => {
   const id = 24602;
   const eng = new Engineer('Valjean, Colette', id, 'valjeanc@gmail.com', 'valjeanc');
   expect(eng.id).toBe(id);
});

// test to see if the email of the engineer returns
test("Can the Engineer's email be returned?", () => {
   const email = 'valjeanc@gmail.com';
   const eng = new Engineer('Valjean, Colette', 24602, email, 'valjeanc');
   expect(eng.email).toBe(email);
});

// test to see if the Engineer object can accept parameters
test("Can the Engineer's GitHub account be returned?", () => {
   const github = 'valjeanc';
   const eng = new Engineer('Valjean, Colette', 24602, 'valjeanc@gmail.com', github);
   expect(eng.github).toBe(github);
});

// test to see if the Engineer object returns the role of Engineer
test('Can the Engineer object return the Role of Engineer?', () => {
   const role = 'Engineer';
   const eng = new Engineer('Valjean, Colette', 24602, 'valjeanc@gmail.com', 'valjeanc');
   expect(eng.getRole()).toBe(role);
});

// test to see if the Engineer object returns the GitHub username
test('Can the Engineer object return the GitHub username?', () => {
   const github = 'valjeanc';
   const eng = new Engineer('Valjean, Colette', 24602, 'valjeanc@gmail.com', 'valjeanc');
   expect(eng.getGitHub()).toBe(github);
});