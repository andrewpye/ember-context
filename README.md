# ember-context

React-style context for Ember.

## Background
React offers a [context](https://reactjs.org/docs/context.html) approach which allows sharing data from ancestor components to descendents without having to pass it directly down the component tree. This addon is an attempt to emulate that behaviour in Ember.

## Disclaimer
Context is usually not the best tool for the job, as it has some drawbacks, both [stylistically](https://reactjs.org/docs/context.html#before-you-use-context) and in terms of [efficiency](https://reactjs.org/docs/context.html#caveats). If you still feel like context is the best solution for your design, then go ahead and use it :wink:

## Installation

* `ember install ember-context`

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
