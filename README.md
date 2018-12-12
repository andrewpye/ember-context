# `ember-context`

React-style context for Ember.

## What is it?
If you're tired of passing properties many levels down the component tree, `ember-context` may be the answer you've been looking for.

## Motivation
React offers a [context](https://reactjs.org/docs/context.html) approach which allows sharing data from ancestor components to descendents without having to pass it directly down the component tree. This addon is an attempt to emulate that behaviour in Ember.

## Disclaimer
Context is usually not the best tool for the job, as it has some drawbacks, both [stylistically](https://reactjs.org/docs/context.html#before-you-use-context) and in terms of [efficiency](https://reactjs.org/docs/context.html#caveats). If you still feel like context is the best solution for your design, then go ahead and use it :wink:

## Usage
Usage is very similar to the React [usage](https://reactjs.org/docs/context.html#api).

### Create a context
Import and invoke `ember-context`'s `createContext` function, passing a default value for the context:

```js
/* contexts/my-context.js */

import createContext from 'ember-context';

export default createContext('some default value');
```

This will return a tuple of `Provider` and `Consumer` components, and a `ConsumerMixin` mixin to be used with your own components.

### Render a provider component
Use the `Provider` component returned by the `createContext` call. You can do this by adding a provider component to your application and re-exporting your context's `Provider` component:

```js
/* components/my-context/provider */

import myContext from '../../contexts/my-context';

export default myContext.Provider;
```

then rendering that component in your application and optionally passing a value (the default value passed to `createContext` will be used otherwise):

```hbs
{{!-- templates/application.hbs --}}

{{#my-context/provider value="my context's value"}}
  ...
{{/my-context/provider}}
```

### Consume the context in a child component
There are two possible ways of achieving this - you can either use your context's `Consumer` component, or its `ConsumerMixin` in one of your own components.

#### Using the `Consumer` component
Similar to rendering the `Provider` component, you can add a consumer component to your application and re-export your context's `Consumer` component:

```js
/* components/my-context/consumer */

import myContext from '../../contexts/my-context';

export default myContext.Consumer;
```

then render that component in your application. The consumer component will yield your context's value:

```hbs
{{!-- templates/application.hbs --}}

{{#my-context/provider value="my context's value"}}
  ...
    {{#my-context/consumer as |context|}}
      <span>{{context}}</span>
    {{/my-context/consumer}}
  ...
{{/my-context/provider}}
```

#### Using the `ConsumerMixin` in your own components
If you'd prefer direct access to your context inside your own components, you can use your context's `ConsumerMixin`:

```js
/* components/my-component.js */

import Component from '@ember/component';
import { computed } from '@ember/object';
import myContext from '../contexts/my-context';

export default Component.extend(myContext.ConsumerMixin, {
  // component has a `context` property which will be
  // automatically populated, which we can use internally.
  myValue: computed('context', function() {
    return `Context value is '${this.get('context')}'`;
  }),
});
```

You then render your component inside a provider to give it access to the context:

```hbs
{{!-- templates/application.hbs --}}

{{#my-context/provider value="my context's value"}}
  ...
  {{my-component}}
  ...
{{/my-context/provider}}
```

### Updating the context's value
You can pass any `value` into your context's `Provider` component, including variables. Any updates to the context's value will propagate automatically:

```js
/* controllers/application.js */

import Controller from '@ember/controller';

export default Controller.extend({
  timesClicked: 0,

  actions: {
    incrementCounter() {
      this.incrementProperty('timesClicked');
    },
  },
});

```

```hbs
{{!-- templates/application.hbs --}}

{{#my-context/provider value=timesClicked}}
  <button {{action "incrementCounter"}}>
    {{#my-context/consumer as |context|}}
      <span>Clicked {{context}} times</span>
    {{/my-context/consumer}}
  </button>
{{/my-context/provider}}
```

## Installation

* `ember install ember-context`

## Contributing

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

## License

This project is licensed under the [MIT License](LICENSE.md).
