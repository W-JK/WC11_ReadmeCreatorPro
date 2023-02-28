// function to generate markdown for README
function generateMarkdown(data) {


  // ------------------------------ licences
  let licenseOption = `${data.license}`;
  let licenseLink = '';
    // ---------------- assigning correct badge link to the chosen licence ---------------- 
  // collection of licence badges:  
  if (licenseOption === 'The Unlicense') {
    licenseBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    licenseLink = 'http://unlicense.org/';
  };
  
  if (licenseOption === 'MIT License') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    licenseLink =   'https://opensource.org/licenses/MIT'                               // 'https://choosealicense.com/licenses/mit/';
  };
  
  if (licenseOption === 'GNU AGPLv3') {
    licenseBadge = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
    licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
  };
  
  if (licenseOption === 'GNU GPLv3') {
    licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  };
  
  if (licenseOption === 'GNU LGPLv3') {
    licenseBadge = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
    licenseLink = 'https://opensource.org/licenses/MPL-2.0';
  };
  
  if (licenseOption === 'Mozilla Public License 2.0') {
    licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    licenseLink = 'https://opensource.org/licenses/MPL-2.0';
  };
  
  if (licenseOption === 'Apache License 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  };
  
  if (licenseOption === 'Boost Software License 1.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
  };
  // --------------- licences end  ---------------------
  
  



  
let markdownTemplate =                  // variable to hold markdown template and add data to it


` 
# ${data.title}  

## Description
${data.description}

${licenseBadge} ${licenseLink}

`;
  
 

 // ----------------------- Table of Contents --------------------------------------------------

 let tableOfContents =
 `
 ## Table of Contents`;

  if (data.installation) {
     tableOfContents +=
      ` 
      * [Installation](#installation)`
  };

  if (data.usage) {
    tableOfContents +=
      ` 
      * [Usage](#usage)`
  };

  if (data.contribution) {
    tableOfContents +=
      ` 
      * [Contribution](#contribution)`
  };

  if (data.testingSolution) {
    tableOfContents +=
      ` 
      * [Testing Solution](#Testing Solution)`
  };

  tableOfContents +=
      ` 
      * [Questions](#questions)`;
  
  
  
  tableOfContents +=
      `
      * [License](#license)`; 



  markdownTemplate += tableOfContents; // add table of contents to markdown

// -------------- table of contents end ----------------------------------




// ----------------------- Installation requirements section ----------------------------------------------

if (data.installation) {
    markdownTemplate +=
`
## Installation
    
  To install application below steps are required:
  ${data.installationSteps}`
  };

  //----------------------- Usage guide section  ----------------------------------------------------
  if (data.usage) {
    markdownTemplate +=
` 
## Usage

  Instructions for use:
  ${data.usage}`
  };

  // ----------------------- Contribution section --------------------------------------------------
  if (data.ownContribution) {
    markdownTemplate +=
` 
## Contribution
  If you would like to contribute, please adhere to the Code_Of_Conduct:
  ${data.ownContribution}`
    };




  // -------------------------- Test section -------------------------------------------------------
  if (data.test) {
    markdownTemplate +=
`
## Testing
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
  
Licensed under the ${licenseOption}. 
For more information please view the (${licenseLink}). 

Part of the source code supplied and liceced under : 
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. `;


return markdownTemplate;

}

module.exports = generateMarkdown;
