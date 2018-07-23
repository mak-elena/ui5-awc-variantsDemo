
[![Build Status](https://travis-ci.org/mak-elena/ui5-awc-variantsDemo.svg?branch=master)](https://travis-ci.org/mak-elena/ui5-awc-variantsDemo)

[OSCON 2018](https://conferences.oreilly.com/oscon/oscon-or) - Adaptive Web Components: Context matters!

## Adaptive Variants Demo

**[Launch Demo](https://mak-elena.github.io/ui5-awc-variantsDemo/)**

Built with
* [openUI5](https://openui5.hana.ondemand.com/) framework (GitHub: https://github.com/SAP/openui5)
* [Adaptive Web Components](https://github.com/FraunhoferIAO/awc-core) Framework
* [Generic Sensor API](https://www.w3.org/TR/generic-sensor/)


## Description

Demonstrates usage of [Adaptive Variants](https://github.com/FraunhoferIAO/awc-core/blob/master/doc/API.md#adaptivevariant) within a UI5 app.

Different details of a trip are shown depending on how many days left till the trip:
* more than 7 days - brief infomation
* 1-7 days: more detailed information
* Day of the trip: Full information (including gates)

### How to install

 * Clone the repository.
 * Ensure `nodejs` and `npm` are installed (see [node.js](http://nodejs.org/))
 * Ensure `grunt` installed. If not, execute
    ````
    npm install -g grunt-cli
    ````
 * install and start the app itself:
    ````
    npm install
    npm install -g grunt-cli
    npm start
    ````
 * open in browser: http://localhost:8080
