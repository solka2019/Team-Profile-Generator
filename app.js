// Inside app.js has 2 main functions: main and prompt
// npm packages and built-in modules
const inquirer = require("inquirer");
const fs = require("fs");
// escreve ou le dentro do computador um arquivo, algo que vai ser aberto depois
const util = require("util");
// One variable for each object
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./templates/htmlTemp");

// built-in util.promisify - it has a flexible promisification function
// function that returns a promise
// search js how to write text to a file?
// promise - call and wait with await - async - when... then... 
// promisify - change the function to not need a callback
// callback - call the function and pass another function to it to be called when the first end async
const writeFileAsync = util.promisify(fs.writeFile);
// passe o nome do arquivo e da um callback pra avisar quando terminar de gravar.Uma fc avisa
let teamArray = [];
let teamstr = ``;

//this calls all the functions in one in order
async function main() {
     try {
          await prompt()
          // for i to teamArray.length  => 

          for (let i = 0; i < teamArray.length; i++) {
               //template literal=``
               teamstr = teamstr + html.generateCard(teamArray[i]);
          }

          let finalHTML = html.generateHTML(teamstr)

          console.log(teamstr)

          //call generate function to generate the html template literal

          //write file 
          writeFileAsync("./output/index.html", finalHTML)


     } catch (err) {
          return console.log(err);
     }
};
// inside of prompt function - long - 
async function prompt() {
     let responseDone = "";
     // prompt to collect input and use do while at least one and do it number of times depending on the while condition
//     try/catch statement 
     do {
          try {
               response = await inquirer.prompt([

                    {
                         type: "input",
                         name: "name",
                         message: "What is the employee's name? "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "What is the the employee's ID? "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "What is the employee's email address? "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "What is the employee's role?",
                         choices: [
                              "Engineer",
                              "Intern",
                              "Manager"
                         ]
                    }
               ]);
               // all of the above is general, for all employees, below it will be more specific for each class


               let response2 = ""
               // if else statement

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's github username?",
                    }, ]);

                    //store the object and push
                    const engineer = new Engineer(response.name, response.id, response.email, response2.x);

                    teamArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         //the x is to only store into the team array
                         name: "x",
                         message: "What school is the employee attending?",
                    }, ]);
                    //store the object and push
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    teamArray.push(intern);

               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's office number?",
                    }, ]);
                    //store the object and push
                    const manager = new Manager(response.name, response.id, response.email, response2.x);
                    teamArray.push(manager);
               }
// try/catch - at least one catch-block or finally-block must be present. If I switch to "finally", err happens
          } catch (err) {
               return console.log(err);
          }
          console.log(teamArray)
          //need to prompt do you want to continue

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue? ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

          // console.log(responseDone.choices);
          //the while parameter is saying continue running the code if the user selects "yes"
     } while (responseDone.finish === "Yes");
};

//call function to run application on the server
main();


// module.exports = teamstr
//This is what teamstr = teamstr + generateCard(teamArray[i]) is doing

// `<div class="card">
//  <div class="card-header">
//      <h2>${arr.name}</h2>  
//      <h2>${arr.title}</h2>
//  </div>

//  <div class="card-body">
//      <ul>
//          <li>${arr.id}</li>
//          <li>${arr.email}</li>
//          <li>${arr.x}</li>
//      </ul>
//  </div>
//  </div>`

//  `<div class="card">
//  <div class="card-header">
//      <h2>${arr.name}</h2>  
//      <h2>${arr.title}</h2>
//  </div>

//  <div class="card-body">
//      <ul>
//          <li>${arr.id}</li>
//          <li>${arr.email}</li>
//          <li>${arr.x}</li>
//      </ul>
//  </div>
//  </div>`

//  `<div class="card">
//  <div class="card-header">
//      <h2>${arr.name}</h2>  
//      <h2>${arr.title}</h2>
//  </div>
//  <div class="card-body">
//      <ul>
//          <li>${arr.id}</li>
//          <li>${arr.email}</li>
//          <li>${arr.x}</li>
//      </ul>
//  </div>
//  </div>`