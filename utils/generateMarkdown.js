// function to generate markdown for README
function generateMarkdown(data) {
  
let markdownTemplate =                  // variable to hold markdown template and add data to it
// collecting title input !remember ` not ' ! ${data.} ; ${licenseOption} if left in this same file
` # ${data.title}  

## Description
${data.description}



![badge](https://img.shields.io/badge/license-${utils/licenseOption/licenseOption}-brightorange)   
You can access more badges and their purposes at [shields.io](https://shields.io)
`;

  
  
 //  return `# ${data.title} `; part of starter code (add or remove later)


}

module.exports = generateMarkdown;
