const inquirer = require("inquirer");
const jest = require("jest");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team member's name?",
            
        },
        {
            type: "input",
            name: "email",
            message: "What is the team member's email?",
            
        },
        {
            type: "input",
            name: "github",
            message: "What is the team member's GitHub username?",
            
        },
        {
            type: "input",
            name: "id",
            message: "What is the team member's ID?",
            
        },
        {
            type: "input",
            name: "number",
            message: "What is the team member's office number?",
            
        },
    ]);
