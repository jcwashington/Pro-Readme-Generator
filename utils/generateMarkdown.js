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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
