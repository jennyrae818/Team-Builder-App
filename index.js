const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    // Questions for Manager
    {
      type: 'input',
      name: 'name',
      message: 'What is your Managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their work ID?:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email address?:',
    },  {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their office number?:',
    },

    // Questionis for Engineers
    {
      type: 'input',
      name: 'e1_name',
      message: 'What is your first Engineers name?',
    },
    {
      type: 'input',
      name: 'e1_id',
      message: 'What is their work ID?:',
    },
    {
      type: 'input',
      name: 'e1_email',
      message: 'What is their email address?:',
    },  {
      type: 'input',
      name: 'e1_github',
      message: 'What is their github username?:',
    },

    //engineer 2
    {
      type: 'input',
      name: 'e2_name',
      message: 'What is your second Engineers name?',
    },
    {
      type: 'input',
      name: 'e2_id',
      message: 'What is their work ID?:',
    },
    {
      type: 'input',
      name: 'e2_email',
      message: 'What is their email address?:',
    },  {
      type: 'input',
      name: 'e2_github',
      message: 'What is their github username?:',
    },


    //engineer 3
    {
      type: 'input',
      name: 'e3_name',
      message: 'What is your third Engineers name?',
    },
    {
      type: 'input',
      name: 'e3_id',
      message: 'What is their work ID?:',
    },
    {
      type: 'input',
      name: 'e3_email',
      message: 'What is their email address?:',
    },  {
      type: 'input',
      name: 'e3_github',
      message: 'What is their github username?:',
    },

     //intern
     {
      type: 'input',
      name: 'intern_name',
      message: 'What is your interns name?',
    },
    {
      type: 'input',
      name: 'intern_id',
      message: 'What is their work ID?:',
    },
    {
      type: 'input',
      name: 'intern_email',
      message: 'What is their email address?:',
    },  {
      type: 'input',
      name: 'intern_school',
      message: 'What school did they go to?:',
    },

  ]).then(data=>{
fs.writeFileSync('./dist/team.html', 
  
  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">   
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">    
      <div class="container-fluid">
      <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item"><a href="mailto:${data.email} ">${data.email} </a></li>
              <li class="list-group-item">Office #: ${data.officeNumber}</li>
          </ul>
      </div>
  </div>
  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.e1_name}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.e1_id} </li>
              <li class="list-group-item"> <a href="mailto:${data.e1_email}">${data.e1_email}</a></li>
              <li class="list-group-item"><a href="https://github.com/fakeaccount" target="_blank" rel="noopener noreferrer">Github: ${data.e1_github}</a></li>
          </ul>
      </div>
  </div>
  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.e2_name}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.e2_id}</li>
              <li class="list-group-item"><a href="mailto:${data.e2_email}">${data.e2_email}</a></li>
              <li class="list-group-item"><a href="https://github.com/fakeaccount" target="_blank" rel="noopener noreferrer">Github: ${data.e2_github}</a></li>
          </ul>
      </div>
  </div>
  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.e3_name}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.e3_id}</li>
              <li class="list-group-item"><a href="mailto:${data.e3_email}">${data.e3_email}</a></li>
              <li class="list-group-item"><a href="https://github.com/fakeaccount" target="_blank" rel="noopener noreferrer">Github: ${data.e3_github}</a></li>
          </ul>
      </div>
  </div>
  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${data.intern_name}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.intern_id}</li>
              <li class="list-group-item"><a href="mailto:${data.intern_email}">${data.intern_email}</a></li>
              <li class="list-group-item">School: ${data.intern_school}</li>
          </ul>
      </div>
  </div>
  
              </div>
          </div>
      </div>
      <title>TEAM</title>
  </head>
  <body>
      
  </body>
  </html>
    `
  )})

