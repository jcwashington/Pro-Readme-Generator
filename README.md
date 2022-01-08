
# Easy Professional README generator
  [![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)




## Description
  When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions; this last part increases the likelihood that other developers will contribute to the success of the project.

  The purpose of this project is to create a easy-to-use command-line application that dynamically generates a professional README.md file from a user's input. This cuts down on time spend on this part of the project while ensuring that you have all the necessary components of a professional looking README file.

  Main technologies utilized:
  Javascript, [Node](https://nodejs.org/en/) and npm [Inquirer](https://www.npmjs.com/package/inquirer)
  Challenges and Future Developement Opportunities:
  At the beginning of this project, I struggled with the Node (and npm) learning curves, but was fortunately able to access lots of documentation and example code. Next steps will include cleaning up code to make it easier for other developers to utilize.

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
  * Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
  * Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
  * Install the Inquirer package using
    ```
    npm install inquirer
    ```
  * Run the application using
    ```
    node index.js
    ```

  To clone this repo:
    ```
    git clone git@github.com:jcwashington/Pro-Readme-Generator.git
    ```

  
  ## [Project Usage](#usage)
  Simply enter your criteria in the CLI to generate your README file. Below see a gif of the functionality. A full video can be found [here](https://drive.google.com/file/d/1fJx5ibAr0VvT71bGGA9s4BMJ_h5xl0X4/view?usp=sharing)]:
  
  ![README generator](assets/READMEgeneration.gif)
 


  ## [Licenses](#licenses)
  This project uses the MIT license.

  To find out more information on open source licenses, please refer to [https://choosealicense.com/](https://choosealicense.com/).

  ## [Testing](#testing)
  None

  ## [How to contribute](#contributing)
  If you would like to contribute to this project, follow the steps below.
  1. Fork the repo on GitHub.
  2. Clone the project to your machine.
  3. Create a branch for your feature work.
  4. Commit the changes to your branch.
  5. Push your work back up to your fork.
  6. Submit a pull request. After changes are reviewed, your feature will be merged.

  ## [Project Credits](#credits)

  Project Authors:
  [jcwashington](https://github.com/jcwashington)
  
  Additional Contributors if any: 

  External Assets:
  - [Inquirer package](https://www.npmjs.com/package/inquirer)
  -[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

  ## [Have Questions?](#questions)
  Contact the author with your questions:
  * GitHub Username: jcwashington
  * Contact Email: jasmine.washington412@gmail.com
