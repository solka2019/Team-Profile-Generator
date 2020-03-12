    const generateHTML = function (teamstr) {

        console.log("Inside generated html");
        
        return`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>TPG</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
                body {
                    background-color:bisque;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin: 0%;
                    height: 100vh;
                }
        
                .header {
                    background-color:burlywood;
                    border: solid white;
                    text-align: center;
                    font-size: 20px;
                    font-family:'Roboto Slab', serif;
                    margin-top: 20px;
                }
        
                .container-body {
                    display: flex;
                    justify-content: space-evenly;
                }
        
                .card {
                    background-color: rgb(255, 255, 255);
                    margin-top: 10%;
                    border: solid 10px burlywood;
                    font-size: x-large;
                }
        
                .card-header {
                    margin: 10%;
                }
        
                .card-body {
                    margin: 5%;
                }
            </style>
        
        </head>
        
        <body>
            <div class=header>
                <h1>My Team</h1>
            </div>
            <div class="container-body">
            
            ${teamstr}
        </div>
        
        
        </body>
        
        </html>`

    }

    //arr is the employee object 
    const generateCard = function (obj) {
        //if else statement
        let roleInfo;

        if (obj.title === "Manager") {
            roleInfo = `Office Number: ${obj.officeNumber}`
        } else if (obj.title === "Engineer") {
            roleInfo = `Github Username: ${obj.github}`
        } else if (obj.title === "Intern") {
            roleInfo = `School: ${obj.school}`
        }

        // ${} variable substituition - template literal - it did not let me put the card inside a var.
        // let returnHTML = `<div class="card">   It gave me "undefined" and did not generate html
        return `<div class="card">
<div class="card-header">
    <h2>${obj.name}</h2>  
    <h2><i class="fa fa-spinner fa-pulse"></i> ${obj.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${obj.id}</li>
        <li>Email: ${obj.email}</li>
        <li>${roleInfo} </li>
    </ul>
</div>
</div>` 
    }
    module.exports.generateHTML = generateHTML
    module.exports.generateCard = generateCard;