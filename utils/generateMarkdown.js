// function to generate markdown for README
function generateMarkdown(data) {

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

  ## Questions

  If you have any questions please contact me at ${data.email} or visit my GitHub profile to see more of my work at https://github.com/${data.username}/

`;
}

module.exports = generateMarkdown;