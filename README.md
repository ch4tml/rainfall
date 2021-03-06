# Rainfall UI

## Technical Overview

The authentication portal is a static React application, written with TypeScript to provide additional type safety over JavaScript.

Application state management will be handled with Redux.

The application was created and is managed using [Create React App](https://facebook.github.io/create-react-app/)
This provides scripts for developing, testing and building the application.

[Material UI](https://material-ui.com/) will provide the component library to ensure a standard stylistic approach. With D3 to graphically represent the data.

## Development

To start the server, run ```yarn start``` and navigate to http://localhost:3000

## External interface

The app uses Environment Agency rainfall data from the [real-time data API (Beta)](http://environment.data.gov.uk/flood-monitoring/doc/rainfall)