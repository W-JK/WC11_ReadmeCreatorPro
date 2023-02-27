// function to generate markdown for README
function generateMarkdown(data) {


  // ------------------------------ licences
  let licenseOption = `${data.license}`;
  let licenseLink = '';
  // ---------------- assigning correct badge link to the chosen licence ---------------- 
  // licence badges:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  if (licenseOption === 'The Unlicense') {
    licenseOption = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };
  
  if (licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  
  if (licenseOption === 'GNU AGPLv3') {
    licenseOption = 'GNUAGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  
  if (licenseOption === 'GNU GPLv3') {
    licenseOption = 'GNUGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  
  if (licenseOption === 'GNU LGPLv3') {
    licenseOption = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  
  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseOption = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  
  if (licenseOption === 'Apache License 2.0') {
    licenseOption = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  
  if (licenseOption === 'Boost Software License 1.0') {
    licenseOption = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  // licences end - to be removed later ---------------------
  
  



  
let markdownTemplate =                  // variable to hold markdown template and add data to it
// collecting title input !remember ` not ' ! ${data.} ; ${licenseOption} if left in this same file
` 
# ${data.title}  

## Description
${data.description}


`
  
 //  return `# ${data.title} `; part of starter code (add or remove later)

 // ----------------------- Table of Contents --------------------------------------------------

 let tableOfContents =
 `
 ## Table of Contents`;
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
`
 ## Questions 

Please not hesitate to reach me under:
${data.questions}

Contact Details: 
GitHub: [${data.GitName}](https://github.com/${data.GitName})
Email:  [${data.email}](mailto:${data.email})`; 



markdownTemplate +=
` 
##Licence
  
Licensed under the ${data.license}. 
For more information please view the [license description](${licenseLink}). 

![badge](https://img.shields.io/badge/license-TheUnlicense-brightorange)   
You can access more badges and their purposes at [shields.io](https://shields.io)
` // badge link ${licenseOption}



` Part of the source code supplied and liceced under : `
` © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. `;

return markdownTemplate;

}

module.exports = generateMarkdown;
