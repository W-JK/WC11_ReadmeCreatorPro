  // ------------------------------ licences
  let licenseOption = `${data.license}`;
  let licenseLink = '';
  // ---------------- assigning correct badge link to the chosen licence ---------------- 
  // licence badges:  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
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
  // licences end - to be removed later ---------------------
  
  


