# Team Profile Generator

This code generates a team profile HTML page based on user input using Node.js and Inquirer package.

## Installation

To run this application, you will need to have Node.js installed on your local machine. If you don’t have it installed, please download and install it from https://nodejs.org/.

To install dependencies, navigate to the root directory and run the following command in your terminal:

npm install

## Usage

To use this application, navigate to the root directory and run the following command in your terminal:

node index.js

Then, follow the prompts to enter the team members’ information, including their name, ID, email, and role (manager, engineer, or intern).

After entering all team members’ information, an HTML file will be generated in the ‘output’ folder with the team profile.

---

## Dependencies

* `inquirer package: used to prompt the user for inputs via the command line

* `path package: used to work with file and directory paths
 
* `fs package: used to write the generated HTML file to the file system
  
* `page-template.js: a module that exports a function to generate the team profile HTML page template

* `Manager, Engineer, and Intern classes: classes that extend from a base Employee class and contain properties specific to each role.

---

## Credits

This application was developed by Eric Nwankwo.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
