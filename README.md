# NgZone

### Brief
Using the TMDb API display a list of now showing movies allowing the user to filter by rating. 

Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.

#### Input:

- TMDb Movies Now Playing API
- TMDb Image API

#### Output

- Display a list of movies, each showing their title, genres and poster image.
- The movies are ordered by popularity (most popular first - popularity property).
- Movies are also filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's is called once.

##Prerequisites

Before you begin, make sure your development environment includes Node.js® and an npm package manager.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

Node.js
Angular requires Node.js version 8.x or 10.x.

To check your version, run node -v in a terminal/console window.

To get Node.js, go to nodejs.org.

npm package manager
Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This Quick Start uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.

Install packages: run 'npm install'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
