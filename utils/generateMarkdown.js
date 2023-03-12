// function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge;

  if (data.projectlicense === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  } if (data.projectlicense === "Eclipse") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  
  } if (data.projectlicense === "IBM") {
    licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  
  } if (data.projectlicense === "ISC") {
    licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  
  }if (data.projectlicense === "SIL") {
    licenseBadge = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
  
  } if (data.projectlicense === "None") {
    licenseBadge = "";
  }



  return `# ${data.projecttitle}

  ## Description

  ${data.projectdescription}

  ## Table of Contents

  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Collaborators](#collaborators)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${data.projectinstall}

  ## Tests

  ${data.projecttest}

  ## Usage

  ${data.projectuse}

  ## Collaborators

  ${data.projectcollaborator} contributed to this project

  ## License

  This project is covered under the ${data.projectlicense} license

  ${licenseBadge}

  ## Questions

  If you have any questions please contact me at ${data.email} or visit my GitHub profile to see more of my work at https://github.com/${data.username}/

`;
}

module.exports = generateMarkdown;