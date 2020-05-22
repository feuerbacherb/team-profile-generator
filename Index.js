const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let omegaTeam = [];


const promptUser = () => {
   return inquirer
      .prompt([
         {
            type: 'input',
            name: 'dept',
            message: "What is the department's name?"
         }
      ])
      .then(function(data) {
         omegaTeam["dept"] = data.dept;
      });
}

const addManager = () => {
   return inquirer
      .prompt([
         {
            type: 'input',
            name: 'mgrName',
            message: "What is the manager's name?"
         },
         {
            type: 'input',
            name: 'mgrID',
            message: "What is the manager's employee ID?"
         },
         {
            type: 'input',
            name: 'mgrEmail',
            message: "What is the manager's email?"
         },
         {
            type: 'input',
            name: 'mgrOfficeNum',
            message: "What is the manager's office phone number?"
         }
      ])
      .then(function(data) {
         const mgr = new Manager(data.mgrName, data.mgrID, data.mgrEmail, data.mgrOfficeNum);
         omegaTeam.push(mgr);
      });
}

const askEngOrIntern = () => {
   return inquirer
      .prompt([
         {
            type: 'list',
            name: 'choice',
            message: "Choose an option",
            choices: ['Add an Engineer', 'Add an Intern', 'Quit']
         }
      ])
      .then(function(data) {
         if (data.choice === "Add an Engineer") {
            addEngineer(omegaTeamg);
         } else if (data.choice === "Add an Intern") {
            console.log("addIntern()");
         } else {
            console.log(omegaTeam);
            console.log('Time to write the code to write stuff');
         }
      });
}

const addEngineer = omegaTeam => {
   if (!omegaTeam.engineers) {
      omegaTeam.engineers = [];
   }

   return inquirer
      .prompt([
         {
            type: 'input',
            name: 'engName',
            message: "What is the engineer's name?"
         },
         {
            type: 'input',
            name: 'engID',
            message: "What is the engineer's employee ID?"
         },
         {
            type: 'input',
            name: 'engEmail',
            message: "What is the engineer's email?"
         },
         {
            type: 'input',
            name: 'engGitHub',
            message: "What is the engineer's GitHub username?"
         }
      ])
      .then(function(data) {
         const eng = new Engineer(data.engName, data.engID, data.engEmail, data.engGitHub);
         omegaTeam.engineers.push(eng);
         askEngOrIntern();
      })
}

promptUser()
   .then(addManager)
   .then(askEngOrIntern);
