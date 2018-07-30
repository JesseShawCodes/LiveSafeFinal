<<<<<<< HEAD
## Overview
=======
# Notes from Jesse Shaw

To launch the final project, follow the steps below in your console:

```
git clone https://github.com/JesseShawCodes/LiveSafeFinal.git
```

## Launch Server

```
cd LiveSafeFinal/backend
npm install
npm start
```

## Launch App

```
cd ../frontend
npm install
npm start
```

The following files were updated in the frontend

* home.component.ts
* news.service.ts

navigate to http://localhost:4200/

# LiveSafe Full Stack Assignment
>>>>>>> 0d0b54a38a6d09613fc61dfce2dacf81cc34295c

Your goal is to complete a simple full-stack application. Most of the frontend is written already, and your task is to implement the search functionality, as well as connect the feed to a real backend.

## Installation


This assignment requires node >= 8.0.0 and npm >= 5.5

```BASH
cd frontend

npm install
```

## Task

#### Implement search

At the top of the news feed there is a search field. Implement search that narrows the current list as you type

Your search should check for a partial match on the "title", "url", and "user" fields

#### Implement backend

Using whatever programming language and database technology you prefer, implement a backend to store and serve up the news entries, and invoke your service from the frontend to populate the interface.

Your backend should have two endpoints, one to get the news feed, and another to create an item. The create endpoint will not be called by the frontend, but will be useful for your own and for our testing.

News entries should include at least a title, url, and user field.

For ease of submission, please put your code inside the 'backend' directory of this repository

#### Implement a unit test for search

Write a unit test to verify that the search works correctly.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically
reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/`
directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
