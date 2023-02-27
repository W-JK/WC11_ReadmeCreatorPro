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


