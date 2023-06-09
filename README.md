# README Generator

![GitHub top language](https://img.shields.io/github/languages/top/JackStockwell/readme-generator) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/JackStockwell/readme-generator/inquirer) [![Link to node Js version download](https://img.shields.io/badge/node-v16.18.0-green)](https://nodejs.org/download/release/latest-v16.x/)

## Description

The README Generator is a small application using the Inquirer NPM which when run will give you a series of prompts which when answered and filled will create a professional looking README based upon the information provided.

The reason I made this project was to practice my basic understand of node.js and to create an application entirely from JavaScript. It also solved the problem of how to write and create a professional README.

I learnt many things about how to export modules in JS, the use of node.js and the use of the filesystem. As well as the Inquirer NPM. This can allow me to better separate my code in JavaScript into other files to make it easier to read and edit.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

I recommend following my tutorial which can be found [here](https://watch.screencastify.com/v/GUleD39cbolL2rSouIzZ) for a better understanding.

To run the application, you will need it be cloned to your local machine. once opened in VS Code open a terminal and place the following into the terminal.

```sh
npm init -y
npm install inquirer@8.2.4
```

You should now have the necessary NPM's needed. The next command that will need to be run is below.

```sh
node .\index.js
```

This will initialise the README generator.

## Usage

Once initialised, you will be prompted with a series of questions that need to be answered professionally to generate the README file. Once generated, it will appear in the README-GEN folder for use, this is to avoid the file overiding the app's README.

## Credits

[Inquirer](https://www.npmjs.com/package/inquirer) - The Inquirer documentation.

[GitHub page of Markdown Shield badges.](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) - Used to get the templates of the shields needed to generate the badges.

[Choose a license](https://choosealicense.com/) - A website with all GitHub licenses.

## License

![GitHub](https://img.shields.io/github/license/JackStockwell/readme-generator)

This repo is using The Unlicense. More infomation can be found [here](https://unlicense.org/)

## Test

Submitting empty strings causes an error to appear, informing the user that the fields cannot be empty.
