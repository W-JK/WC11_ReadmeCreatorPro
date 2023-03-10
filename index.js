// giving acces to file system - read/write permision 
const fs = require('fs');

const path = require('path'); // part of the chalenge source code 

// required part - importing preinstalled "inquirer" 
// source https://www.npmjs.com/package/inquirer/v/8.2.5 and documentation 
const inquirer = require('inquirer');
 
 const generateMarkdown = require('./utils/generateMarkdown'); 
 const util = require('util'); // linking utils folder 


// ------------------------------------------- array of questions for user ------------------------------------------------

const answers = [


    //--------- #<Your-Project-Title> ------------ 
    // When a user enters the project title, it's displayed as the title of the README.

{ // ------------------------ Title -----------------------------------------------------------------------------------

    type: 'imput',
    name: 'title',
    mesage: 'Please add title to your repository(Required)',
    validate: ProjectTitleInput =>{ 
        if (ProjectTitleInput) {
            return true; 
        } 

        else{
            console.log('Project title is Required' + 'Please NAME your project')
            return false;
        }
    }    
},




    //Sections entitled:



    //--------------------------- Description -----------------------------------------------------------------------------

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


    //------------------------------- Installation requirements -----------------------------------------------------------
    // Check if the instalation is required
    {
        type: 'confirm',
        name: 'installation',
        message: 'Is there an installation of the app, or is component required?'
    },

    // ------ if yes follow - ask user to imput instalation steps (manual) ------------------
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
      


    // -------------- Usage ----------------------------------------------------------------------------------------------
    { 
        type: 'imput',
        name:'usage',
        message: 'Describe how to use your application.',      

    },


    // -------------- License --------------------------------------------------------------------------------------------

    {

    type: 'checkbox',
    name: 'license',
    message: 'A license tells others what they can and cannot do with your code.Please choose a license.(Required)',
    choices: ['The Unlicense','MIT License','GNU AGPLv3', 'GNU GPLv3',
        'GNU LGPLv3', 'Mozilla Public License 2.0',
        'Apache License 2.0',  'Boost Software License 1.0'],
    validate: nameInput => {
        if (nameInput) {
        return true;
        } else {
        console.log('Please select a license.');        
        return false;
        }
    }
    },  




    // ------------------ Contributing -----------------------------------------------------------------------------------
    {
        type: 'confirm',
        name: 'contribution',
        message: 'Would you like to create your own contribution "Code_Of_Conduct" '

    },

    {
        type: 'input',
        name: 'ownContribution',
        message: 'Please write "Contributions "Code_Of_Conduct" and requirements  to communicate how people should contribute to your project.',
        
        when: ({ ownContribution }) => {
          if (ownContribution) {
            return true;

          } else {
            console.log('To help your project contributors do good work, fell free to use default Code_Of_Conduct, with contribution guidelines and add it to your project repository')
            return false;
          }
        }
    },


    // -----------------   Tests ------------------------------------------------------------------------------------------
    {
    type: 'confirm',
    name: 'test',
    message: 'Would you allow users to test your application'
    },
        // ------ if yes follow - ask user to imput testing steps (manual) ------------------   
        {
            type: 'imput',
            name: 'testingSolution',
            message: 'Please write test guide',
            when: ({ test }) => {
                if (test) {
                return true;
                } else {
                return false;
                }
            }
            

        },





    // ------------------ Questions ---------------------------------------------------------------------------------------

        // ------------ required contact informations ------------------------------------- 
        {
            type: 'input',
            name: 'GitName',
            message: 'What is your name? (GitHub portfolio name recomended)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Lets yor achievements to be recognised and allow others to know you');
                return false;
              }
            }
          },

          {
            type: 'imput',
            name: 'email',
            message: 'Please add your contact email.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('User Name not added');
                  return false;
                }
              }                
              
          },





        // ------------- contact info end ------------------------------------------------- 
    {
        type: 'input',
        name: 'questions',
        message: 'Please advice user how to Contact you.',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        }
      }



] 


    // --------------- chalenge starter code ------------ 




// function to write README file 

 function writeToFile(DemoREADME, data) {  
    fs.writeFile(DemoREADME,data,error => {
        if (error) {
            return console.log('Sorry, something went wrong:' + error);
        }
    })
    }

// function to initialize program

const createDemoREADME = util.promisify(writeToFile);
   
   async function init() {
    try { 
        const userAnswers =   await inquirer.prompt(answers);                                              
        console.log('Please wait until data is processed and your DemoREaadme is created', userAnswers);
        const myMarkdown = generateMarkdown(userAnswers);
        
        console.log(myMarkdown);
        await createDemoREADME('DemoREADME.md', myMarkdown);   // can be other name - nice to have: adding Project Title to readme name
    
    } 
    
    catch (error) {
        console.log('Sorry, something went wrong:' + ' error:' + error + ' lets try again!');
    }
    };



// function call to initialize program
init(); 

