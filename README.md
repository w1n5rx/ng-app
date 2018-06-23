### Objective
Create a simple SPA to display overview of customers and allow CRUD operations.

### Basic implementation

* Store data locally. Check `customer-sample.json` for sample data.

### ~~Deployed version~~

```
https://ng-app.herokuapp.com/
```

### To run/test locally

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the lite-server.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)
* `npm run e2e:fast` - run protractor e2e tests a little faster after the first time
That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results for both unit and e2e tests appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a `./_test-output/protractor-results.txt` file.

### <a name="ideas"></a> Ideas for Improvement

Here are some ideas for this app that could be extended:

* Role-based CRUD operations
* [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
Examples as shown in [DnD for File Uploading](https://css-tricks.com/drag-and-drop-file-uploading/) and [DnD for Car Parking Game](https://css-tricks.com/creating-a-parking-game-with-the-html-drag-and-drop-api/).
* [Material Dashboard for Angular](https://github.com/creativetimofficial/material-dashboard)

### References
* [Example Angular app with Gulp concatenation](https://github.com/jdxcode/ng-modules.git)
* [Setting Up Angular from Scratch](https://blog.angularindepth.com/setting-up-angular-from-scratch-1f518c65d8ab)
* [lite-server](https://www.npmjs.com/package/lite-server)
