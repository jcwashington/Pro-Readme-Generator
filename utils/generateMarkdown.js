// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
  //"GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "MIT", "Apache", "Boost"
  if (license === "GNU AGPLv3"){
    return "https://img.shields.io/badge/license-AGPLv3-blue"
  } else if (license === "GNU GPLv3"){
    return "https://img.shields.io/badge/license-GPLv3-blue"
  } else if (license === "GNU LGPLv3") {
    return "https://img.shields.io/badge/license-LGPLv3-blue"
  } else if (license === "Mozilla") {
    return "https://img.shields.io/badge/license-Mozilla-brightgreen"
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-green"
  } else if (license === "Apache") {
    return "https://img.shields.io/badge/license-Apache-yellow"
  } else if (license === "Boost") {
    return "https://img.shields.io/badge/license-Boost-orange"
  } else{
    return ' '
  }
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3"){
    return "https://opensource.org/licenses/AGPL-3.0"
  } else if (license === "GNU GPLv3"){
    return "https://opensource.org/licenses/GPL-3.0"
  } else if (license === "GNU LGPLv3") {
    return "https://opensource.org/licenses/LGPL-3.0"
  } else if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0"
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "Boost") {
    return "https://opensource.org/licenses/BSL-1.0"
  } else{
    return ' '
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
