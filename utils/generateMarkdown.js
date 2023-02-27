// function to generate markdown for README
function generateMarkdown(data) {
  
let markdownTemplate =                  // variable to hold markdown template and add data to it
// collecting title input !remember ` not ' ! ${data.} ; ${licenseOption} if left in this same file
` # ${data.title}  

## Description
${data.description}


`
  
 //  return `# ${data.title} `; part of starter code (add or remove later)

 // ----------------------- Table of Contents --------------------------------------------------

 let tableOfContents =
 `## Table of Contents`;
   if (data.installation) {
     tableOfContents +=
       ` * [Installation](#installation)`
  };

  if (data.usage) {
    tableOfContents +=
      ` * [Usage](#usage)`
  };

  if (data.contribution) {
    tableOfContents +=
      ` * [Contribution](#contribution)`
  };

  if (data.testingSolution) {
    tableOfContents +=
      `  * [Testing Solution](#Testing Solution)`
  };

  markdownTemplate +=
  `  * [Questions](#questions)`;
  
  
  
  markdownTemplate +=
  ` * [License](#license)`; 



  markdownTemplate += tableOfContents; // add table of contents to markdown

// -------------- table of contents end ----------------------------------




// ----------------------- Installation requirements section ----------------------------------------------

if (data.installation) {
    markdownTemplate +=
` ## Installation
    
  To install application below steps are required:
  ${data.installationSteps}`
  };

  //----------------------- Usage guide section  ----------------------------------------------------
  if (data.usage) {
    markdownTemplate +=
` ## Usage

  Instructions for use:
  ${data.usage}`
  };

  // ----------------------- Contribution section --------------------------------------------------
  if (data.ownContribution) {
    markdownTemplate +=
` ## Contribution
  If you would like to contribute, please adhere to the Code_Of_Conduct:
  ${data.ownContribution}`
    };




  // -------------------------- Test section -------------------------------------------------------
  if (data.test) {
    markdownTemplate +=
` ## Testing
  If you would like to test application; please follow those steps:
  ${data.test}`
  };


// --------------------------- Contact section --------------------------------------------------------

// markdownTemplate += ''

markdownTemplate += 
` ## Questions 

Please not hesitate to reach me under:
${data.questions}'

Contact Details: 
GitHub: [${data.GitName}](https://github.com/${data.GitName})
Email:  [${data.email}](mailto:${data.email}); 
`


markdownTemplate +=
` ##Licence
  
Licensed under the ${data.license}. 

![badge](https://img.shields.io/badge/license-${utils/licenseOption/licenseOption}-brightorange)   
You can access more badges and their purposes at [shields.io](https://shields.io)
` // badge link 


` Part of the source code supplied and liceced under : `
` © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. `;

return markdownTemplate;

}

module.exports = generateMarkdown;
