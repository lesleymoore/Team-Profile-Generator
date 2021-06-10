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
        <link rel="stylesheet" href="style.css">
        <title>Team Profiles</title>
    </head>
    <body>
    <div class="card newcard" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title words">${answers.loop[0].name}</h5>
      <p class="card-text">${answers.loop[0].role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${answers.loop[0].id}</li>
      <li class="list-group-item">Office #: ${answers.loop[0].number}</li>
      <li class="list-group-item">Email: ${answers.loop[0].email}</li>
    </ul>
    <div class="card-body">
      <a target='_blank' href="https://github.com/${answers.loop[0].github}" class="card-link github">GitHub</a>
    </div>
    </div>
    </body>
    </html>`
;
const generate2 = (answers) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <title>Team Profiles</title>
    </head>
    <body>
    <h1 class="team">My Team</h1>
      <br>
      <div class="area">
    <div class="card newcard" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title words">${answers.loop[0].name}</h5>
      <p class="card-text title">${answers.loop[0].role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item title">ID: ${answers.loop[0].id}</li>
      <li class="list-group-item title">Office #: ${answers.loop[0].number}</li>
      <li class="list-group-item title">Email: ${answers.loop[0].email}</li>
    </ul>
    <div class="card-body">
      <a target='_blank' href="https://github.com/${answers.loop[0].github}" class="title card-link github">GitHub</a>
    </div>
    </div>
    <div class="card newcard" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title words">${answers.loop[1].name}</h5>
      <p class="card-text title">${answers.loop[1].role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item title">ID: ${answers.loop[1].id}</li>
      <li class="list-group-item title">Office #: ${answers.loop[1].number}</li>
      <li class="list-group-item title">Email: ${answers.loop[1].email}</li>
    </ul>
    <div class="card-body">
      <a target='_blank' href="https://github.com/${answers.loop[1].github}" class="title card-link github">GitHub</a>
    </div>
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
            
        },{type: "loop",
        name:"intern",
        message: "Would you like to add an intern?",
        questions: [{
            type: "input",
            name: "iname",
            message: "What is the intern's name?",
            
        },
        {
            type: "input",
            name: "iemail",
            message: "What is the intern's email?",
            
        },
        {
            type: "input",
            name: "school",
            message: "Where does the intern go to school?",
            
        },
        {
            type: "input",
            name: "internid",
            message: "What is the intern's ID?",
            
        },
        ],}
    ]}, )
    .then((answers) => {
        const htmlfile = generateHTML(answers);
        const htmlfile2 = generate2(answers);
    if (answers.loop[1]) {
   fs.writeFile('index.html', htmlfile2, (err) =>
        err ? console.log(error) : console.log('Check out your new page!'));
    } else {
        fs.writeFile('index.html', htmlfile, (err) =>
        err ? console.log(error) : console.log('Check out your new page!'))
        
    }
    });
