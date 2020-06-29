# AngularTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Component testing

`MessageButtonComponent` serves for a component testing. It has one dependency - JokesServices that makes http request to a third-party API. Component tests are written for this class, including the behaviour of the async service.

`LoginComponent` abd `AuthService` explore further three ways of asynchronous testing:

- Jasmine done() function
- Angular specific async and whenStable()
- Angular specific fakeAsync() and tick()
