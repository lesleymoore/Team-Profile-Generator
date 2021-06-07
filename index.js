const { assertTSAnyKeyword } = require("@babel/types");
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const generateHTML = (answers) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <title>Team Profiles</title>
    </head>
    <body>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${answers.name}</h5>
      <p class="card-text">${answers.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Office #: ${answers.number}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
    </ul>
    <div class="card-body">
      <a target='_blank' href="https://github.com/${answers.github}" class="card-link">GitHub</a>
    </div>
    </div>
    </body>
    </html>`
;
inquirer.prompt({
    type:"loop",
    name:"loop",
    message: "Would you like to add an employee?",
    questions: [
        {
            type: "input",
            name: "name",
            message: "What is the team member's name?",
            
        },
        {
            type: "input",
            name: "role",
            message: "What is the team member's role?",
            
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
    ]})
    .then((answers) => {
        const htmlfile = generateHTML(answers);

   fs.writeFile('index.html', htmlfile, (err) =>
        err ? console.log(error) : console.log('Check out your new page!'));
    });
