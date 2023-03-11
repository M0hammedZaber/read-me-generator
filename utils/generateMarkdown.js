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

  ${data.projectcollaborator}

    ## License

  ${data.projectlicense}

  ## Questions

  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;