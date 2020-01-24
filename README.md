![react-npm-package-template](https://repository-images.githubusercontent.com/236028186/e0034e00-3ee4-11ea-8676-b3f80c86678a)

<p align="center">
    <a href="https://www.npmjs.com/package/react-npm-package-template">
        <img src="https://img.shields.io/npm/v/react-npm-package-template" alt="npm version">
    </a>
    <a href="https://travis-ci.org/awibox/react-npm-package-template">
        <img src='https://travis-ci.org/awibox/react-npm-package-template.svg?branch=master' alt='Build' />
    </a>
    <a href='https://coveralls.io/github/awibox/react-npm-package-template?branch=master'>
        <img src='https://coveralls.io/repos/github/awibox/react-npm-package-template/badge.svg?branch=master' alt='Coverage Status' />
    </a>
    <a href="https://www.npmjs.com/package/react-npm-package-template">
        <img src="https://img.shields.io/npm/dm/react-npm-package-template" alt="Downloads">
    </a>
    <img src="https://img.shields.io/github/license/awibox/react-npm-package-template" alt="license">
</p>

## Table of contents
* [How to install](#howtoinstall)
* [Initializing the package](#initializing)
* [Rename a component](#rename)
* [Build of the package](#build)
* [Publishing a package](#publish)
* [Travis CI](#travis)
* [Coveralls](#coveralls)
* [Badges in the readme](#badges)

<a name="howtoinstall"></a>
## How to install
You can use this project like template. 
To do this, you need press button "**Use this template**".

Or clone repository and go to the project folder.
```bash
git clone https://github.com/awibox/react-redux-app-boilerplate.git ProjectName
cd ProjectName
```
Then you should install required dependencies.
```bash
yarn install
```
<a name="initializing"></a>
## Initializing the package
The first step is to initialize your package. You should execute following command:
```bash
npm init
```
And fill in the required fields (package name, version, license). You can correct the other fields manually in the **package.json**.

<a name="rename"></a>
## Rename a component
The next step is to replace the ```YourComponentName``` in the entire project with the one you need.

<a name="build"></a>
## Build of the package
After writing the code you need to build the package with the following command:
```bash
yarn  build
```

<a name="publish"></a>
## Publishing a package
To publish a package, run the command:
```bash
npm publish
```
If you are not logged in to npm you should run the command before publishing:
```bash
npm login
```

<a name="travis"></a>
## Travis CI
You need to register on the [Travis CI](https://travis-ci.org/) and connect the repository.

<a name="coveralls"></a>
## Coveralls
You need to register on the [Coveralls](https://coveralls.io/) and connect the repository.

<a name="badges"></a>
## Badges in the README.md
For **badges** to work you need to change the repository name in the link and image paths.
