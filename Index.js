const inquirer = require('inquirer');
const writeHTML = require('./lib/generateHTML');
const { writeFile, copyFile } = require('./utils/generate-site.js');

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
            return addEngineer(omegaTeam);
         } else if (data.choice === "Add an Intern") {
            return addIntern(omegaTeam);
         } else {
            return omegaTeam;
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
         return askEngOrIntern(omegaTeam);
      })
}

const addIntern = omegaTeam => {
   if (!omegaTeam.interns) {
      omegaTeam.interns = [];
   }

   return inquirer
      .prompt([
         {
            type: 'input',
            name: 'intName',
            message: "What is the intern's name?"
         },
         {
            type: 'input',
            name: 'intID',
            message: "What is the intern's employee ID?"
         },
         {
            type: 'input',
            name: 'intEmail',
            message: "What is the intern's email?"
         },
         {
            type: 'input',
            name: 'intSchool',
            message: "What is the intern's school?"
         }
      ])
      .then(function(data) {
         const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool);
         omegaTeam.interns.push(intern);
         return askEngOrIntern(omegaTeam);
      })
}

//writeHTML(testData);




promptUser()
   .then(addManager)
   .then(askEngOrIntern)
   .then(omegaTeam => {
      return writeHTML(omegaTeam);
   })
   .then(pageHTML => {
      return writeFile(pageHTML);
   })
   .then(writeFileResponse => {
      console.log(writeFileResponse);
   });
