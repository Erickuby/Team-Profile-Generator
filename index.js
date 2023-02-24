const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((managerDetails) => {
      const manager = new Manager(
        managerDetails.name,
        managerDetails.id,
        managerDetails.email,
        managerDetails.officeNumber
      );
      team.push(manager);
      createTeam();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((engineerDetails) => {
      const engineer = new Engineer(
        engineerDetails.name,
        engineerDetails.id,
        engineerDetails.email,
        engineerDetails.github
      );
      team.push(engineer);
      createTeam();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((internDetails) => {
      const intern = new Intern(
        internDetails.name,
        internDetails.id,
        internDetails.email,
        internDetails.school
      );
      team.push(intern);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Manager",
          "Intern",
          "I do not want to add any more team members",
        ],
      },
    ])
    .then((choice) => {
        if (choice.memberChoice === "Engineer") {
          createEngineer();
        } else if (choice.memberChoice === "Intern") {
          createIntern();
        } else {
          const html = render(team);
          if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
          }
  
          fs.writeFile(outputPath, html, (err) => {
            if (err) {
              console.log("Failed to write HTML file");
            } else {
              console.log("Successfully wrote HTML file");
            }
          });
        }
      });
  }
  
  createManager();
  