// giving acces to file system - read/write permision 
const fs = require('fs');

// const path = require('path'); // part of source code - commented for test 

// required part - importing preinstalled "inquirer" 
// source https://www.npmjs.com/package/inquirer/v/8.2.5 and documentation 
const inquirer = require('inquirer');
// coment for test:  const generateMarkdown = require("./utils/generateMarkdown");
//  coment for test: const util = require('util'); // linking utils folder


// test point  ------------------------------------------------
const generateMarkdown = answers => {
    return (
      ` 
       <!DOCTYPE html>
    <html lang="en-gb">
        <head>
        <!-- Required meta tags -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> 
    
         <title> WJK - ${answers.title} </title>

         </head> 

         <body>
         </body>

         <html>  `  
         )}
   // test point end --------------------------------------  

// ------------- array of questions for user --------------
inquirer
.prompt([    // .createPromptModule - replace with .prompt for test 

    //--------- #<Your-Project-Title> ------------ 
    // When a user enters the project title, it's displayed as the title of the README.

{ // adding title -------------------------------------
    type: 'imput',
    name: 'title',
    mesage: 'Please add title to your repository',
    validate: ProjectTitleInput =>{ 
        if (ProjectTitleInput) {
            return true; 
        } 

        else{
            console.log('Project title is Required'+ '/nPlease NAME your project')
            return false;
        }
    }    
},




    //Sections entitled:



    //Description -------------------------------------------
// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project: explaining the what, why, and how .',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Description of your project is required.Please add one');
          return false;
        }
      }
    
},


    //Table of Contents



    //Installation
    // Check if the instalation is required
    {
        type: 'confirm',
        name: 'installation',
        message: 'Is there an installation of the app, or is component required?'
    },

    // if yes follow - ask user to imput instalation steps (manual) 
    {
        type: 'input',
        name: 'installationSteps',
        message: 'Please write installation instructions and requirements.',
        
        when: ({ installation }) => {
          if (installation) {
            return true;

          } else {
            return false;
          }
        }
    },
      


    // Usage



    //License




    // Contributing



    // Tests



    // Questions




])


// testpoint - basic functionality 
.then ((answers) => {
    const fileContents = generateMarkdown (answers);
    console.log(answers)
    let filename = 'test.html';

    fs.writeFile(filename,fileContents ,(err) => 
    err ? console.log(err) : console.log('Answers Test Succesfull !') );
    
           
  });






    // --------------- chalenge starter file ------------ 


/*

// function to write README file
 function writeToFile(DemoREADME, data) {  
    fs.writeFile(DemoREADME,data,error => {
        if (error) {
            return console.log('Sorry, something went wrong:' + error);
        }
    })
    }

// function to initialize program

const createPromptModule = util.promisify(writeToFile);
   // function init() { } // chalenge code 
   async function init() {
    try { 
        const userAnswers = inquirer.createPromptModule(answers) 
        console.log('Please wait until data is processed and your DemoREaadme is created', userAnswers);
        const myMarkdown = generateMarkdown(userAnswers);
        console.log(myMarkdown);
        await createReadMe('DemoREADME.md', myMarkdown);   // can be other name - nice to have: adding Project Title to readme name
    
    } catch (error) {
        console.log('Sorry, something went wrong:' + '/n error:' + error + '/n lets try again!');
    }
    };
})


// function call to initialize program
init(); // chalenge starter code


*/  // comment out for test - end