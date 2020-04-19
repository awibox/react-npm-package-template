<div align="center">

![react-npm-package-template](https://repository-images.githubusercontent.com/236028186/e0034e00-3ee4-11ea-8676-b3f80c86678a)

[![Version](https://img.shields.io/npm/v/react-npm-package-template)](https://www.npmjs.com/package/react-npm-package-template)
[![Build](https://travis-ci.org/awibox/react-npm-package-template.svg?branch=master)](https://travis-ci.org/awibox/react-npm-package-template)
[![Coverage](https://coveralls.io/repos/github/awibox/react-npm-package-template/badge.svg?branch=master)](https://coveralls.io/github/awibox/react-npm-package-template?branch=master)
[![Minified size](https://img.shields.io/bundlephobia/min/react-npm-package-template)](https://github.com/awibox/react-npm-package-template/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/react-npm-package-template)](https://www.npmjs.com/package/react-npm-package-template)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=awibox/react-npm-package-template)](https://dependabot.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/awibox/react-npm-package-template/pulls)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

</div>

## Table of contents
* [How to install](#howtoinstall)
* [Initializing the package](#initializing)
* [Rename a component](#rename)
* [Build of the package](#build)
* [Publishing a package](#publish)
* [Travis CI](#travis)
* [Coveralls](#coveralls)
* [Badges in the readme](#badges)
* [Community profile](#community)
* [Contributing](#contributing)

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

<a name="community"></a>
## Community profile
Don't forget to edit files such as [CONTRIBUTING.md](/.github/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](/.github/CODE_OF_CONDUCT.md).

<a name="contributing"></a>
## Contributing
Please read through our [CONTRIBUTING.md](/.github/CONTRIBUTING.md).
