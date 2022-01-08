// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // This will render the badge (and it's link) for every license type
  // ref: https://naereen.github.io/badges/
  //"GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "MIT", "Apache", "Boost"
  if (license === "GNU AGPLv3"){
    return "[![License: AGPL v3](https://img.shields.io/badge/license-AGPLv3-blue.svg)](https://opensource.org/licenses/AGPL-3.0)"
  } else if (license === "GNU GPLv3"){
    return "[![License: GPL v3](https://img.shields.io/badge/license-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)"
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/license-LGPLv3-blue.svg)](https://opensource.org/licenses/LGPL-3.0)"
  } else if (license === "Mozilla") {
    return "[![License: Mozilla](https://img.shields.io/badge/license-Mozilla-brightgreen)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache") {
    return "[![License: Apache](https://img.shields.io/badge/license-Apache-yellow)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Boost") {
    return "[![License: Boost](https://img.shields.io/badge/license-Boost-orange)](https://opensource.org/licenses/BSL-1.0)"
  } else{
    return ' '
  }
}
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "GNU AGPLv3"){
//     return "https://opensource.org/licenses/AGPL-3.0"
//   } else if (license === "GNU GPLv3"){
//     return "https://opensource.org/licenses/GPL-3.0"
//   } else if (license === "GNU LGPLv3") {
//     return "https://opensource.org/licenses/LGPL-3.0"
//   } else if (license === "Mozilla") {
//     return "https://opensource.org/licenses/MPL-2.0"
//   } else if (license === "MIT") {
//     return "https://opensource.org/licenses/MIT"
//   } else if (license === "Apache") {
//     return "https://opensource.org/licenses/Apache-2.0"
//   } else if (license === "Boost") {
//     return "https://opensource.org/licenses/BSL-1.0"
//   } else{
//     return ' '
//   }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  Technologies Utilized:
  ${data.techUsed}
  Challenges and Future Developement Opportunities:
  ${data.challenges}

  ## Contents

  1. [Installation](#installation)
  2. [Project Usage](#usage)
  3. [Licenses](#licenses)
  4. [Testing](#testing)
  5. [How to contribute](#contributing)
  6. [Project Credits](#credits)
      1. Authors
      2. Additional Acknowledgements
  7. [Have Questions?](#questions)

  ## [Installation](#installation)
  ${data.installation}

  To clone this repo:
    ${data.clone}

  ## [Project Usage](#usage)
  ${data.usage}

  ## [Licenses](#licenses)
  This project uses the ${data.license} license.

  To find out more information on open source licenses, please refer to [https://choosealicense.com/](https://choosealicense.com/).

  ## [Testing](#testing)
  ${data.tests}

  ## [How to contribute](#contributing)
  If you would like to contribute to this project, follow the steps below.
  1. Fork the repo on GitHub.
  2. Clone the project to your own machine.
  3. Create a branch for your feature work.
  3. Commit changes to your own branch.
  4. Push your work back up to your fork.
  5. Submit a Pull request so that we can review your changes

  ## [Project Credits](#credits)

  Project Authors:
  [${data.username}](https://github.com/${data.username})
  Additional Contributors if any: ${data.contributors}

  External Assets:
  ${data.externalAssets}

  ## [Have Questions?](#questions)
  Contact the author with your questions:
    *GitHub Username: ${data.username}
    *GitHub Email: ${data.email}
`;
}

module.exports = generateMarkdown;
